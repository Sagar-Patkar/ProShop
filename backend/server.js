
import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
const app = express();
dotenv.config();
app.get("/", (req,res) => {
    res.send("API is running...");
});

app.get("/api/products", (req,res) => {
    res.json(products);
});

app.get("/api/products/:id", (req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
})