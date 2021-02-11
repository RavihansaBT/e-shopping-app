const Product = require('../models/Product');

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.send(product)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {
    getAllProduct,  
    getProductById
}