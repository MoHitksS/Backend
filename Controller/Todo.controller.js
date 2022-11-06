const { TodoModel } = require("../Models/Todo.model");

const getTodo = () => async (req, res) => {
    const todos = await TodoModel.find();
    res.send({ msg: 'Successfull', todos: todos });
}

const postTodo = () => async (req, res) => {
    const todo = new TodoModel(req.body)
    todo.save();
    res.send({ msg: 'Successfull' });
}

const updateTodo = () => async (req, res) => {
    const { id } = req.params;
    await TodoModel.replaceOne({ id: id }, req.body)
    res.send({ msg: 'Successfull' });
}

const deleteTodo = () => async (req, res) => {
    const { id } = req.params;
    await TodoModel.deleteOne({ id: id })
    res.send({ msg: 'Successfull' });
}


module.exports = {
    getTodo, postTodo, updateTodo, deleteTodo
}
