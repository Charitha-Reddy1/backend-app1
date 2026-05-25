import mongoose from "mongoose";

const dbConnect = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

  } catch (error) {

    console.log("MongoDB Error:", error);

  }
};

export default dbConnect;