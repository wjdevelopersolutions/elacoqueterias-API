import slug from 'slug';
import { nanoid } from 'nanoid';
import { validationResult } from 'express-validator';

import Product from '../models/product';
import product from '../models/product';

/**
 * @Desc Get list of all products
 * @route GET /api/v1/product
 * @access Public
 */

export const getProduct = async (req, res, next) => {

  const productos = await Product.find();
  
  try {
    if (productos.length === 0) {
      return res.status(404).json({
        success: false,
        error: {
          msg: 'No se encontraron productos en la base de datos'
        }
      })
    }
    res.json({
      success: true,
      msg: 'Show all products',
      productos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        msg: 'Error 500: conección con el servidor fallida',
        error
      }
    })
  }

}

/**
 * @Desc Create a new product
 * @route POST /api/v1/product
 * @access Private
 */

export const postProduct = async (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log({errors: errors.array()});
    return res.status(400).json({ errors: errors.array() });
  }

  const Prod_Title_Slug = slug(req.body.Prod_Title);
  const Prod_Url = `${Prod_Title_Slug}-${nanoid(10)}`; 

  const body = {
    Prod_Title: req.body.Prod_Title,
    Prod_Slug: Prod_Title_Slug,
    Prod_Slug_Url: Prod_Url,
    Prod_Price: req.body.Prod_Price,
    Prod_Images: req.body.Prod_Images,
    Prod_Videos: req.body.Prod_Videos,
    Prod_Description: req.body.Prod_Description
  }

  const producto = new Product(body);

  console.log(producto);

  const productoGuardado = await producto.save();
  
  try {
    res.json({
      success: true,
      msg: 'Se ha creado el producto',
      producto: productoGuardado
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: 'No se pudo crear el producto',
      error
    })
  }
  
}

/**
 * @Desc Get a single product
 * @route GET /api/v1/product/:id
 * @access Public
 */

export const getProductById = async (req, res, next) => {

  const producto = await Product.findById({ _id: req.params.Prod_Id });

  try {
    if (producto === null) {
      return res.status(404).json({
        success: false,
        error: {
          msg: `No se encontro el producto con el ID: ${req.params.Prod_Id} en la base de datos`
        }
      })
    }
    res.json({
      success: true,
      msg: `Show product ${req.params.id}`,
      producto
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: {
        msg: 'Error 500: conección con el servidor fallida',
        error
      }
    });
  }

}

/**
 * @Desc Update e single product
 * @route PUT /api/v1/product/:id
 * @access Private
 */

export const updateProduct = (req, res, next) => {

  res.json({
    success: true,
    msg: `Update product ${req.params.id}`
  });
}

/**
 * @Desc Delete e single product
 * @route DELETE /api/v1/product/:id
 * @access Private
 */

export const deleteProduct = (req, res, next) => {

  res.json({
    success: true,
    msg: `Delete product ${req.params.id}`
  });
}

