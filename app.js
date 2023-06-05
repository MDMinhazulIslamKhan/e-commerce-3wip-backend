import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Welcome route
app.get("/", (req, res) => {
  return res.status(200).send("Welcome in E-commerce application!");
});

// application routes

export default app;
