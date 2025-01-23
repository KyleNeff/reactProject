import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts)
router.post("/", createProduct);
// Updating all fields use put, updating some use patch
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct);

export default router;