# App_BackendJp

This project demonstrates a simple JWT based authentication API using **Express**. `swagger.json` contains the OpenAPI specification for the available endpoints.

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file using `.env.example` as a template:
   ```bash
   cp .env.example .env
   ```
   Set `JWT_SECRET` and optionally adjust `PORT`.

## Environment variables

- `PORT` – port where the HTTP server will listen (default `3000`).
- `JWT_SECRET` – secret key used to sign JSON Web Tokens.

## Running the server

Start the API with:
```bash
npm start
```
The server entry point is [`index.js`](index.js).

## API routes

- `POST /api/auth/register` – register a new user.
- `POST /api/auth/login` – login and obtain a JWT token.
- `GET /api/users` – list registered users (requires a valid token).

See `swagger.json` for the full OpenAPI documentation of these endpoints.
