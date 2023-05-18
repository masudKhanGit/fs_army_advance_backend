import express from 'express';
import { usersController } from '../controller/userController.js';

const router = express.Router();

router.get('/users', usersController)

export default router;