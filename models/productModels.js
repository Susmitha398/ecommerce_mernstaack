const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
      maxLength: [100, "Product name cannot exceed 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        image: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please enter product category"],
      enum: {
        values: [
          "electronics",
          "fashion",
          "food",
          "laptop",
          "headphone",
          "books",
          "sarees",
          "shoes",
          "outdoor",
        ],
        message: "Please select a valid category",
      },
    },
    seller: {
      type: String,
      required: [true, "Please enter seller name"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
      maxLength: [20, "Product stock cannot exceed 20"],
    },
    numberofreviews: {
      type: Number,
      default: 0,
    },
    review: [
      {
        name: {
          type: String,
          required: true,
        },
        ratings: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
