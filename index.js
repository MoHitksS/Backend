const express = require("express");
const { connection } = require("./Config/db");
const cors = require('cors');
const { Todo } = require("./Routes/Todo.Routes");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", Todo)

app.listen(process.env.PORT, async () => {
    try{
        await connection
        console.log("Connected To DB")
    }catch(err){
        console.log("Cannot Connect To DB")
        console.log(err)
    }
    console.log("Listen To The Port", process.env.PORT)
})
