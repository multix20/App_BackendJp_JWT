import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from './auth.js';

app.get('/api/users', verifyToken, (req, res) => {
  res.json(users.map(({ password, ...u }) => u));
}); 

const users = []; // Simulación de base de datos en memoria

// Registro de usuario
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ name, email, password: hashedPassword });

  res.status(201).json({ message: 'Usuario registrado' });
});

// Login con generación de token
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Credenciales inválidas' });

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});
