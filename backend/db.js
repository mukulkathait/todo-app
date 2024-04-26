const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL, {
    dbName: "todoApp"
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("TODO", todoSchema)

module.exports = { todo }