import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/userModel.js";
import config from "../../config/index.js";

export const registration = async (req, res) => {
  try {
    const { name, email, contactNo, password, fullAddress, imageUrl } =
      req.body;
    const isUnique = await User.findOne({ email });
    if (isUnique) {
      return res
        .status(201)
        .json({ message: "Already registered with this email" });
    }

    if (
      !name?.firstName ||
      !name?.lastName ||
      !email ||
      !imageUrl ||
      !contactNo ||
      !password ||
      !fullAddress?.address ||
      !fullAddress?.postCode ||
      !fullAddress?.city
    ) {
      return res.status(201).json({
        message:
          "You must give all data name(firstName, lastName), email, contactNo, password, fullAddress (address, city, postCode).",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      contactNo,
      password: hashedPassword,
      fullAddress,
      imageUrl,
    });
    await user.save();

    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
        phonNumber: user.phonNumber,
        name: user.name,
        role: "user",
      },
      config.secret_key,
      { expiresIn: "24h" }
    );
    return res.status(201).json({
      message: "User created successfully.",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found." });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password." });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        phonNumber: existingUser.phonNumber,
        name: existingUser.name,
        role: existingUser.role,
      },
      config.secret_key,
      { expiresIn: "24h" }
    );
    return res.status(201).json({
      message: "Login successfully.",
      token,
    });
  } catch (error) {
    return res.status(409).json({ message: error });
  }
};
