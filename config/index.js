import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  // port: process.env.PORT,
  // database_url: process.env.DATABASE_URL,
  // database_name: process.env.DATABASE_NAME,
  // secret_key: process.env.SECRET_KEY,
  port: 5000,
  database_url: "mongodb://127.0.0.1:27017",
  database_name: "e-commerce",
  secret_key: "123456",
};
