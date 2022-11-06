const mongoose = require("mongoose");
const TodoSchema = mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    status: { type: Boolean }
})

const TodoModel = mongoose.model("todos", TodoSchema)

module.exports = {
    TodoModel
}