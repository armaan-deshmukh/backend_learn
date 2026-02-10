import { Router } from "express";
import Todo from "../models/todo.model.js";
import router from "../routes/todo.route.js";

const createTodo = async (req, res) => {
    const { title } = req.body

    if (!title) {
        return res
        .status(400)
        .json({ message: "Title is required" })
    }

    const todoDocument = await Todo.create({ title })

    const todo = await Todo.findById(todoDocument._id)

    if (!todo) {
        return res
        .status(500)
        .json({ message: "Something went wrong!" })
    }

    return res
    .status(200)
    .json({ todo })
}

const listAllTodos = async (req, res) => {
    const todos = await Todo.find()

    if (!todos) {
        return res
        .status(400)
        .json({ message: "No Todo is present in the DB!" })
    }
    
    return res
    .status(200)
    .json({ todos })

}

const listTodoByTitle = async (req, res) => {
    const { title } = await req.body

    if (!title) {
        return res
        .status(400)
        .json({ message: "Title is required!" })
    }
    
    const todos = awaitTodo.find({ title: { $regex: title, $options: "i" }})

    if (!todos) {
        return res
        .status(400)
        .json({ message: "No record found!" })
    }
    
    return res
    .status(200)
    .json({ todos })
}

const updateById = async (req, res) => {
    const { id } = req.params
    const { title } = req.body

    if (!id || !title)
        return res
        .status(400)
        .json({ message: "ID & Title is required!" })

    const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        {
            $set: {
                title: title
            }
        },
        { 
            new: true
        }
    )

    return res
    .status(200)
    .json({ updatedTodo })

}

const toggleStatus = async (req, res) => {}

const deleteTodo = async (req, res) => {}

export {
    createTodo,
    listAllTodos,
    listTodoByTitle,
    updateById
}