import express from 'express';
const router = express.Router();

import {
  getShop,
  postShop,
  getShopById,
  updateShop,
  deleteShop
} from '../controllers/shop';

router.route('/')
      .get(getShop)
      .post(postShop);

router.route('/:id')
      .get(getShopById)
      .put(updateShop)
      .delete(deleteShop);

export default router;