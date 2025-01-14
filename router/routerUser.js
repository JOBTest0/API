import express from 'express';
import { register, login, getUser, logout } from '../controllers/userController.js';
import { isAuthenticated } from '../middleware/auth.js';
import { verifyToken } from '../utils/verifyToken.js';
const router = express.Router();

router.post('/register-member', register);
router.post('/login-member', login);
router.get('/get_user', isAuthenticated,verifyToken,getUser);
router.post('/logout',verifyToken, logout);


export default router;
