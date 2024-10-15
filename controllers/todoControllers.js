import Todo from "../models/todoModels.js"

export const createTodo = async (req, res, next) => {
    const { todo, deadline } = req.body;
    try {
        if (!todo || !deadline) {
            return res.status(400).render("home", { error: "Todo and deadline are required" });
        } else {
            await Todo.create({ todo, deadline });
            res.status(201).redirect("/api/v1/todo");
        }
    } catch (error) {
        res.status(501).render("home", { error: error.message });
    }
};


export const getTodos= async (req,res,next)=>{
    try {
        const todos = await Todo.find();
        res.status(200).render("home", { todos });
    } catch (error) {
        res.status(500).render("home", { error: error.message });
    }
}

export const getTodo= async (req,res,next)=>{
    const {id}=req.params;
    try {
        const todo= await Todo.findById(id)
        res.status(200).render("update",{todo})            
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const updateTodo= async (req,res,next)=>{
    const {id}=req.params;
    const {todo}=req.body;
    try {
        await Todo.findByIdAndUpdate(id,{todo},{new:true})
        res.status(200).redirect("/api/v1/todo")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const updateStatus= async (req,res,next)=>{
    const {id}=req.params;
    const {isCompleted}=req.body;
    try {
        await Todo.findByIdAndUpdate(id,{isCompleted:isCompleted},{new:true})
        res.status(200).redirect("/api/v1/todo")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const deleteTodo= async (req,res,next)=>{
    const {id}=req.params
    try {
        await Todo.findByIdAndDelete(id)
        res.status(200).redirect("/api/v1/todo")
    } catch (error) {
        res.status(500).send(error.message)

    }
}