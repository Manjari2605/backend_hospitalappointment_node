const express=require("express");
const rout=express.Router();
const upload = require("../middleware/upload");

const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/productcontroller");
rout.post("/add",upload.single("image"), addProduct);
rout.get("/", getProducts);
rout.get("/:id", getProductById);
rout.put("/:id", updateProduct);
rout.delete("/:id", deleteProduct);
module.exports=rout;