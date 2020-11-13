import express from 'express';
const router = express.Router();

import {
  getShop,
  postShop,
  getShopById,
  updateShop,
  deleteShop,
  getCart,
  postShopAddToCart
} from '../controllers/shop';

router.route('/')
      .get(getShop)
      .post(postShop);

router.route('/add-to-cart')
      .get(getCart)
      .post(postShopAddToCart);

router.route('/:id')
      .get(getShopById)
      .put(updateShop)
      .delete(deleteShop);

export default router;