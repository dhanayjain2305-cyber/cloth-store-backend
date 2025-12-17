import express from "express";
import { getStats } from "../controllers/dashboardcontroller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// DASHBOARD STATS
router.get("/stats", protect, getStats);

export default router;
