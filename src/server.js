require("dotenv").config()
const express = require("express")
const mongoose = require('mongoose');
const stateRoute = require("../Routers/stateRoute")
const taskRouter = require("../Routers/taskRoute")
const cors = require("cors")
const DB_URL = process.env.DB_URL

const port = process.env.PORT
const FRONTEND = process.env.FRONTEND
const app = express()

const corsOptions = {
    origin: FRONTEND ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(express.json())

app.use(cors(corsOptions))

app.use("/test/state",stateRoute)
app.use("/test/task",taskRouter)


app.get("/greet",(req,res)=>{
    res.status(200).json({message:"Api called"})

})


mongoose.connect(DB_URL).then(()=>{
    console.log("MongoDB connected")
    app.listen(port,()=>{
        console.log(`Server Listening on ${port}`)
    })
}).catch((error)=>(console.log(error.message)))

