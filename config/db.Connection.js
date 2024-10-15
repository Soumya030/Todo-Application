import mongoose from "mongoose";

//db Connection

export async function dbConnection() {
try {
    let connect= await mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
    console.log(`MongoDB connected succesfully on ${connect.connection.host}`);
} catch (error) {
    console.log(error.message);
}    
}