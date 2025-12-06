const mongoose=require("mongoose");
const taskSchema=mongoose.Schema({
  name:{
  
    type:String,
    required:[true,"Please enter the name"],
    },
    address:{
        type:String,
        required:[true,"Please add the address"],
        
    },
   latitude:{
    type:Number,
    required:[true,"Please add the latitude"],

   },
  longitude:{
    type:Number,
    required:[true,"Please add the longitude"],

   },
   status:{
  type:String,
    required:[true,"Please add the status"],
   },
   poweroutput:{
    type:Number,
    integer: true,
    required:[true,"please add power output"],
   },
   connectortype:{
     type:String,
     required:[true,"please add Type"],
   },

},
{
    timestamps:true,
}

);
module.exports=mongoose.model("task",taskSchema);
