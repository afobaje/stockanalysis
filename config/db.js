import mongoose from "mongoose";
import "dotenv/config";

export default async function ConnectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB);
    console.log(`mongodb connected,${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
