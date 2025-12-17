import express from "express";
import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct
} from "../controllers/productcontroller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// ADD PRODUCT
router.post("/", protect, addProduct);

// GET ALL PRODUCTS
router.get("/", protect, getProducts);

// UPDATE PRODUCT
router.put("/:id", protect, updateProduct);

// DELETE PRODUCT
router.delete("/:id", protect, deleteProduct);

export default router;
