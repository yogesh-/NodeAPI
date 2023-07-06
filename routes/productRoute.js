const express = require('express');
const router = express.Router()
const Product = require('../models/productModel')
const {addProduct,getAllProduct, findProduct, updateProduct, deleteProduct} = require('../controller/productController')

// add a product to database - create operation
router.post('/product',addProduct)


// get all the products - read operation
router.get('/product',getAllProduct)

// find a product by id - search/read operation
router.get('/product/:id',findProduct)

// update operation
router.put('/product/:id', updateProduct)

// delete operation

router.delete('/product/:id',deleteProduct)

module.exports = router;