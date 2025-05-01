# Todo Application

This repository contains two full-stack Todo Application projects that progressively introduce more advanced tools and techniques in web development.

## Table of Contents

- [Overview](#overview)
- [Project 1: Node.js + Express.js + SQLite + JWT](#project-1-nodejs--expressjs--sqlite--jwt)
- [Project 2: Full Stack with PostgreSQL, Prisma & Docker](#project-2-full-stack-with-postgresql-prisma--docker)
- [Getting Started](#getting-started)
- [License](#license)

---

## Overview

This repo demonstrates the evolution of a Todo app across two stages:

1. A basic backend using Node.js, Express, and SQLite with JWT authentication.
2. A more advanced, production-ready setup using PostgreSQL, Prisma ORM, and Docker for containerization.

---

## Project 1: Node.js + Express.js + SQLite + JWT

**Directory**: `project_1`

### Features

- RESTful API built with Express.js
- SQLite database for lightweight storage
- JWT-based authentication (Login/Register)
- Serves a basic frontend (HTML/CSS/JS)
- Protected routes for authenticated users

### Tech Stack

- Node.js
- Express.js
- SQLite
- JWT
- HTML

### Running Instructions
Clone the Repository:
```bash
git clone https://github.com/KavinduSenesh/Todo-Application.git
cd Project_1
```
Install Dependencies:
```
npm install express bcryptjs jsonwebtoken
```
Install Developer Dependencies
```
npm install --save-dev nodemon
```
Update The package.json Scripts
```
 "scripts": {
    "dev": "nodemon --env-file=.env --experimental-sqlite ./src/server.js",
  },
```
set Up Environment Variables:
```
JWT_SECRET=your_jwt_secret_here
PORT=5000 # Or change to 3000 if preferred
```
Run the Server:
```
npm run dev

```
## Project 2: Node.js + Express.js + Prisma + PostgreSQL + JWT

**Directory**: `project_2`

### Features
- RESTful API built with Express.js
- PostgreSQL integration via Prisma ORM
- JWT-based Authentication system (Login/Register)
- User authorization with protected routes
- Dockerized setup for easy development & deployment
- Database migrations and schema management with Prisma

### Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma
- JWT
- HTML

### Project Structure

```
backend-todo-app/
│
├── public/
│   └── index.html              # The frontend HTML file for authentication and todo management
│
├── prisma/
│   ├── schema.prisma           # The frontend HTML file for authentication and todo management
│   └── migrations/             #
│
├── src/
│   ├── controllers/            # (Optional) For future separation of concerns
│   └── middlewares/
│       └── authMiddleware.js    # Middleware for verifying JWT and protecting routes
│   └── routes/
│       └── authRoutes.js        # Routes for user registration and login
│       └── todoRoutes.js        # Routes for authenticated CRUD operations on todos
│   └── prismaClient.js          # Prisma client database setup and table creation
│   └── server.js                # Main server entry point that sets up routing and middleware
│
├── Dockerfile                   # Docker container setup instructions
├── docker-compose.yaml          # Docker setup config file
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lockfile for exact dependency versions
└── todo-app.rest                # REST client file for emulating API requests

```

### Running Instructions

Clone the Repository:
```bash
git clone https://github.com/KavinduSenesh/Todo-Application.git
cd Project_2
```
Generate the Prisma Client:
```
npx prisma generate
```
Build your docker images:
```
docker compose build
```
Create PostgreSQL migrations and apply them:
```
docker compose run app npx prisma migrate dev --name init
```
Also - to run/apply migrations if necessary:
```
docker-compose run app npx prisma migrate deploy
```
Boot up 2x docker containers::
```
docker compose up
```
This project demonstrates how to build a secure and scalable RESTful API using modern tools like Express.js, PostgreSQL, and Prisma

Feel free to fork, contribute, or open issues.

Made by Kavindu Senesh
