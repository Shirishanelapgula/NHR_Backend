const mongoose = require("mongoose")

const stateSchema = mongoose.Schema(
    {
    stateName:{
        type: String,
        required: true,
    }
},
    {
        timestamps:true
    }
)

const State = mongoose.model("state",stateSchema)

module.exports = State