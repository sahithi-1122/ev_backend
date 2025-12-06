const asyncHandler=require("express-async-handler");
const  Task=require("../models/taskModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const gettask =asyncHandler(async(req,res)=>{
 
    const task=await Task.find().lean();
    res.status(200).json(task);

}

);




const createtask =asyncHandler(async(req,res)=>{
    const{name,address,latitude,longitude,status,poweroutput,connectortype}=req.body;
     const task= await Task.create({
            name:name,
            address:address,
            latitude:latitude,
            longitude:longitude,
            status:status,
            poweroutput:poweroutput,
            connectortype:connectortype,
    
        });
         console.log(`task created ${task}`);
         if(task){
            res.status(200).json(task);
         }
         else
         {
             res.status(400);
             throw new Error("task not created !");
         }

});

const updatetask =asyncHandler(async(req,res)=>{
const task=await Task.findById(req.params.id);
if(!task)
{
    res.status(404);
    throw new Error("task not found");
}
const updatedtask=await Task.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true}

);

res.status(200).json(updatedtask);

}

);

const deletetask=asyncHandler(async(req,res)=>{
const task=await Task.findById(req.params.id);
if(!task)
{
    res.status(404);
    throw new Error("task not found");
}


await task.deleteOne();
res.status(200).json(task);

}
);
module.exports={
    gettask,
    createtask,
    updatetask,
    deletetask,
}