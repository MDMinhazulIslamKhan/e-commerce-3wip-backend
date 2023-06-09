import express from "express";
import cors from "cors";

import CommonRoute from "./routes/v1/common/index.js";

const app = express();
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Welcome route
app.get("/", (req, res) => {
  return res.status(200).send("Welcome in E-commerce application!");
});

// application common routes
app.use("/v1/common", CommonRoute);

//No route
app.all("*", (req, res) => {
  const route = req.params;
  return res.status(404).send(`No Route found in "${route[0]}" !`);
});

export default app;
