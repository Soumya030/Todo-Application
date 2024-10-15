import mongoose from "mongoose";

//schema (structure) to store data
const todoSchema=new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        required:false,
    },
    deadline:{
        type:Date,
        required:true,
    }
})

//creating model
let Todo = mongoose.model("Todo",todoSchema)

export default Todo;