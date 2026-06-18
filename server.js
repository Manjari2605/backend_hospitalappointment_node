const express = require("express");
const mongoose = require("mongoose");
const route=require("./routes/patientRoutes");

const connectDB=require("./config/db")

const app = express();
connectDB()
app.use("/uploads", express.static("uploads"));
app.use("/api/patients", route);
app.use("/api/products", require("./routes/productRoutes"));
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Server is working");
});


app.listen(3002, () => {
  console.log("server started");
});