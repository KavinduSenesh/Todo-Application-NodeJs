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
- EJS or plain HTML (based on implementation)

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
