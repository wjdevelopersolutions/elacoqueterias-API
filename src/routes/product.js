import express from 'express';
const router = express.Router();

// Express validator
import { body } from 'express-validator';

import {
  getProduct,
  postProduct,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/product';

router.route('/')
      .get(getProduct)
      .post(
            [ 
                  body('Prod_Price', 'El precio del producto es obligatorio').not().isEmpty().trim().escape(),
                  body('Prod_Images', 'Debes de darle una imagen a tu producto').not().isEmpty(),
                  body('Prod_Description', 'La descriptción del producto es obligatoria').not().isEmpty().trim().escape(),

            ],
            postProduct);

router.route('/:Prod_Id')
      .get(getProductById)
      .put(updateProduct)
      .delete(deleteProduct);

export default router;