const State = require("../Models/stateModel")

const addState= async(req,res)=>{
    try{
        const stateObj = req.body
        const resData = await State.create(stateObj)
        res.status(200).json(resData)
    }
    catch(error){
        throw new Error(error.message)
    }
}

const getState= async(req,res)=>{
    try{
        const resData = await State.find({})
        res.status(200).json(resData)
    }
    catch(error){
        throw new Error(error.message)
    }
}

const deleteState = async(req,res)=>{
    try{
        const {id} = req.params
        const resData = await State.findByIdAndDelete(id)
        
        res.status(200).json("State Deleted SuccessFully")
    }
    catch(error){
        throw new Error(error.message)
    }
}

module.exports = {addState,getState,deleteState}