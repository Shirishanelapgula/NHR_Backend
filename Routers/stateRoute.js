const express = require("express")

const stateRoute = express.Router()

const {addState ,getState ,deleteState} = require("../Controllers/stateController")


stateRoute.post("/add",addState)


stateRoute.get("/get",getState)

stateRoute.delete("/delete/:id",deleteState)


module.exports= stateRoute