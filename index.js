const express = require("express");
const { connection } = require("./Config/db");
const cors = require('cors');
const { Todo } = require("./Routes/Todo.Routes");
require("dotenv").config();
const app = express();
const corsOptions = {
    origin: 'https://mern-app-rockaro.onrender.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
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
