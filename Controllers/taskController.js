const Task = require("../Models/taskModel")

const addTask= async(req,res)=>{
    try{
        const taskObj = req.body
        const resData = await Task.create(taskObj)
        res.status(200).json(resData)
    }
    catch(error){
        throw new Error(error.message)
    }
}

const getTask= async(req,res)=>{
    try{
        const resData = await Task.find({})
        res.status(200).json(resData)
    }
    catch(error){
        throw new Error(error.message)
    }
}

const deleteTask = async(req,res)=>{
    try{
        const {id} = req.params
        await Task.findByIdAndDelete(id)
        
        res.status(200).json("State Deleted SuccessFully")
    }
    catch(error){
        throw new Error(error.message)
    }
}

module.exports = {addTask,getTask,deleteTask}