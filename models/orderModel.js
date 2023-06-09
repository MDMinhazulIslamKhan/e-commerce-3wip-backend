import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
    },
    shippingAddress: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      fullAddress: {
        address: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        postCode: {
          type: String,
          required: true,
        },
      },
    },
    product: [
      {
        productId: {
          type: String,
          required: true,
        },
        quantity: {
          type: String,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", orderSchema);
export default Product;
