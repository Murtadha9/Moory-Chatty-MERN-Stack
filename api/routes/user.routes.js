import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { getUsersForSidebar } from '../controllers/user.controller.js';



const router=express.Router();

router.get("/", verifyToken, getUsersForSidebar);


export default router;