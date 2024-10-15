import { Router } from "express";
import { createTodo, deleteTodo, getTodo, getTodos, updateStatus, updateTodo } from "../controllers/todoControllers.js";
const router= Router()

//POST METHOD
router.post("/",createTodo)

//GETALL METHOD
router.get("/",getTodos)

//GETONE METHOD
router.get("/:id",getTodo)

//UPDATE METHOD
router.patch("/:id",updateTodo)

//update the status of a document
router.patch("/status/:id",updateStatus)

//delete one particular document
router.delete("/:id",deleteTodo)




export default router;