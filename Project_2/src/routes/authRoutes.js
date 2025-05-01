import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";
import { console } from "inspector";
import { Prisma } from "@prisma/client";
import prisma from "../prismaClient.js";

const router = express.Router();

router.post("/register", async (req, res) => {

  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  try{

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    })
    
    const defaultTodo = `Add your first todo!`;
    await prisma.todo.create({
      data: {
        task: defaultTodo,
        userId: user.id
      }
    })

    const token = jwt.sign({ id: result.lastInsertRowid },
         process.env.JWT_SECRET, { expiresIn: '24h' })
    res.json({ token })
  }catch(err){
    console.log(err);
    res.status(503).send("Error saving user to database");
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try{
    const user = await prisma.user.findUnique({
      where: {
        username: username
      }
    })

    if(!user){
      return res.status(404).send("User not found")
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password)

    if(!passwordIsValid){
      return res.status(401).send({message: "Invalid password"})
    }
    console.log(user.id)
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: '24h'})
    res.json({ token })
  }catch(err){
    console.log(err.message);
    res.sendStatus(503);
  }
});

export default router;
