const express=require("express");
const router=express.Router();
const {gettask,createtask,updatetask,deletetask}=require("../Controllers/taskController");
router.route("/").get(gettask).post(createtask);
router.route("/:id").put(updatetask).delete(deletetask);

module.exports =router;