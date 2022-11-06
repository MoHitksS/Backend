const { Router } = require("express");
const { getTodo, postTodo, updateTodo, deleteTodo } = require("../Controller/Todo.controller");
const Todo = Router();

Todo.get("/get", getTodo())

Todo.post("/create", postTodo())

Todo.post("/update/:id", updateTodo())

Todo.delete("/delete/:id", deleteTodo())

module.exports = {
    Todo
}


