import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectDB=async()=>{
    try{
      await mongoose.connect(process.env.MONGO);
      console.log("mongDB is Connected");
    }catch(err){
   console.log("MONGOB CONNECTION ERROR" , err )
}}

export default connectDB;

