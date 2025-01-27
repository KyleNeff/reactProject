import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js'

import productRoutes from "./routes/product.route.js";

// npm run dev

dotenv.config()

const app = express();

// Allows us to accept JSON data in req.body
// Middle Layer
app.use(express.json());

app.use("/api/products",productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server started")
});
