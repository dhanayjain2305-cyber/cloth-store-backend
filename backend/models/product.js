import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  images: [String],
  sizes: { S: Number, M: Number, L: Number, XL: Number }
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
