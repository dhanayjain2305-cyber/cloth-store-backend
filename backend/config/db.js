import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri || uri.includes("PASTE_YOUR")) {
    console.warn("MONGO_URI not set or placeholder detected — skipping MongoDB connection.");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
