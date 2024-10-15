import { error } from "console";
import {createServer} from "http"
import app from "./app.js"

const PORT=3000

let server= createServer(app)

server.listen(PORT,(err)=>{
    if(err){
        console.log(error.message);        
    }else{
        console.log(`server running on port ${PORT}`);
        
    }
})