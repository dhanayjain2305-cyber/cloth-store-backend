import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: Array,
  totalAmount: Number,
  status: { type: String, default: "Pending" },
  paymentStatus: { type: String, default: "Paid" },
  customer: Object
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
