/**
 * @Desc Get list of all shops
 * @route GET /api/v1/shop
 * @access Public
 */

export const getShop = (req, res, next) => {

  res.json({
    success: true,
    msg: 'Show all shops'
  });
}

/**
 * @Desc Create a new shop
 * @route POST /api/v1/shop
 * @access Private
 */

export const postShop = (req, res, next) => {

  res.json({
    success: true,
    msg: 'Create a shop'
  });
}

/**
 * @Desc Get a single shop
 * @route GET /api/v1/shop/:id
 * @access Public
 */

export const getShopById = (req, res, next) => {

  res.json({
    success: true,
    msg: `Show shop ${req.params.id}`
  });
}

/**
 * @Desc Update e single shop
 * @route PUT /api/v1/shop/:id
 * @access Private
 */

export const updateShop = (req, res, next) => {

  res.json({
    success: true,
    msg: `Update shop ${req.params.id}`
  });
}

/**
 * @Desc Delete e single shop
 * @route DELETE /api/v1/shop/:id
 * @access Private
 */

export const deleteShop = (req, res, next) => {

  res.json({
    success: true,
    msg: `Delete shop ${req.params.id}`
  });
}

