import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

// :id means it is dynamic  -user can pass any value they want
router.delete("/:id", deleteProduct);

export default router;
