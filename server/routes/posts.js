import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);  // getPosts is a handler/callback function, which is executed on triggering/hitting '/' route.
router.get('/', createPost);

export default router;