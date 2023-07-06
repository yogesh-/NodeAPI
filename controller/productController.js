const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

// add or create a new product
const addProduct = async (req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}

// // get all the products - read operation
const getAllProduct = async (req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    }

// find a product by id - search/read operation
const findProduct = asyncHandler(async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
        
    } 
})

// update operation
const updateProduct = async(req,res)=>{
    try {
         const {id} = req.params;
         const product = await Product.findByIdAndUpdate(id,req.body);
         if(!product){
            return res.status(404).json({message:`cannot find any product with ID ${id}`})
         }
         const updatedProduct = await Product.findById(id);
         res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//delete operation
const deleteProduct = asyncHandler(async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with ${id}`);
        
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = {addProduct,getAllProduct,findProduct,updateProduct,deleteProduct}