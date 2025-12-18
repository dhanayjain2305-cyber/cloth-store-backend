import Product from "../models/product.js";
import Order from "../models/Order.js";

export const getStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();

    const revenue = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalAmount" } } }
    ]);

    res.json({
      totalProducts,
      totalOrders,
      totalRevenue: revenue[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
