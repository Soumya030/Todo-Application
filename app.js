import express from "express"
import { dbConnection } from "./config/db.Connection.js";
import router from "./routes/todoRoutes.js";
import methodOverride from "method-override";

//creating instance to express
let app=express();

//register the template engine
app.set("view engine", "ejs")

//to process incoming json data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));


//calling Database
dbConnection()

app.use("/api/v1/todo", router)

export default app;