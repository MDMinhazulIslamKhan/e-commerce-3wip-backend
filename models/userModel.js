import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ["user", "seller", "admin"],
      default: "user",
    },
    fullAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postCode: { type: String, required: true },
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
