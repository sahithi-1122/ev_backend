const express=require("express");
const router=express.Router();
const {userregister,userlogin,currentuser}=require("../Controllers/UserController");
const validateToken = require("../middleware/validateTokenHandler");
router.post("/register",userregister);
router.post("/login",userlogin);
router.get("/current",validateToken,currentuser);
module.exports=router;