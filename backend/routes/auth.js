import express from "express";
import { loginAdmin, registerAdmin } from "../controllers/authcontroller.js";

const router = express.Router();

// LOGIN ADMIN
router.post("/login", loginAdmin);

// REGISTER ADMIN
router.post("/register", registerAdmin);

export default router;
