const mongoose = require("mongoose")

const taskSchema = mongoose.Schema(
    {
        assignedTo:{
            type: String,
            required: true,
    },
        taskStatus:{
            type: String,
            required: true,
    },
        category:{
            type: String,
            required: true,
}
},
    {
        timestamps:true
    }
)

const Task = mongoose.model("task",taskSchema)

module.exports = Task

