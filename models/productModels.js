const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"]
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"]
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
