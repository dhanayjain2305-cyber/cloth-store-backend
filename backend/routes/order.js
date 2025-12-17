import express from "express";
import {
  getOrders,
  updateOrderStatus
} from "../controllers/ordercontroller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// GET ALL ORDERS
router.get("/", protect, getOrders);

// UPDATE ORDER STATUS
router.put("/:id", protect, updateOrderStatus);

export default router;
