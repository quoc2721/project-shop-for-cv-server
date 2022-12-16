import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/sliderItems", (req, res) => {
  res.send(data.sliderItems);
});
app.get("/api/category", (req, res) => {
  res.send(data.category);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server run on port http://localhost:${port}`);
});
