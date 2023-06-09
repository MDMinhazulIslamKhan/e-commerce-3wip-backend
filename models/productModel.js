import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    sortCounter: {
      type: Number,
      required: true,
      default: 100,
    },
    popularity: [
      {
        rating: {
          type: Number,
          required: true,
        },
        review: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
export default Product;
