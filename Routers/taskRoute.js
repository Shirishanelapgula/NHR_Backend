const express = require("express")

const taskRouter = express.Router()

const {addTask ,getTask ,deleteTask} = require("../Controllers/taskController")


taskRouter.post("/add",addTask)


taskRouter.get("/get",getTask)

taskRouter.delete("delete/:id",deleteTask)


module.exports= taskRouter