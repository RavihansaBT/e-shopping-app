const express = require('express');
const router = express.Router();
const { getAllProduct, getProductById } = require('../controller/productControllers')

// @desc GET all products
// @routr GET api/products/
// @access Public
router.get('/', getAllProduct);

// @desc GET all products by id
// @routr GET api/products/:id
// @access Public
router.get('/:id', getProductById);

module.exports = router