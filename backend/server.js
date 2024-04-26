const express = require("express")
const { todo } = require("./db.js")
const cors = require("cors")
const { createTodo, updateTodo } = require("./types.js")

const port = 3000

const app = express()

app.use(cors())
app.use(express.json())

app.post("/todo", async (req, res) => {
    const createPayload = req.body
    const parseTodo = createTodo.safeParse(createPayload)

    if (!parseTodo.success) {
        res.status(411).json({
            success: false,
            error: "You send the wrong inputs"
        })
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        success: true,
        message: "Todo Created"
    })
})

app.get("/todos", async (req, res) => {
    const response = await todo.find({})

    res.json({
        success: true,
        message: response
    })
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body
    const parseTodo = updateTodo.safeParse(updatePayload)

    if (!parseTodo.success) {
        res.status(411).json({
            success: false,
            error: "You send the wrong inputs"
        })
    }

    await todo.updateOne({
        _id: updatePayload.id
    }, {
        completed: true
    })

    res.json({
        success: true,
        message: "Todo Updated"
    })
})

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`)
})