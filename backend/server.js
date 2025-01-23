import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js'

// npm run dev

dotenv.config()

const app = express();

// app.get("/", (req,res) => {
//     res.send("Server Ready")
// })

app.get("/products", (req,res) => {});

app.listen(5000, () => {
    connectDB();
    console.log("Server started")
});
