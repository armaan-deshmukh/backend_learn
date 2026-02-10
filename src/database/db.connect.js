import mongoose from "mongoose";
import DBName from "../constant.js";

const connectDB = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGODB_URL}${DBName}`
    );

    console.log(`DB Connected :: ${response.connection.host}`);
  } catch (error) {
    console.log(`ERROR :: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
