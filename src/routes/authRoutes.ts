import { Router } from 'express';
import { register, authenticate } from '../controllers/authController';

const router = Router();

router.post('/register', register);
router.post('/login', authenticate);

export default router;
