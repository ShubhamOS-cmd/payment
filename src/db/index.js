// let's start
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected ~~ DB HOST : ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("Connection failed while making to connection!");
        process.exit(1);
    }
}

export default connectDB