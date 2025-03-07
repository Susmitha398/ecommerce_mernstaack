const Product = require('../models/productModels');

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all products in the database"
    });
};

// Create product - POST /products/new
exports.newProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product: product
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
