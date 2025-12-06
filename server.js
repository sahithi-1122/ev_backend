const express=require("express");
const cors = require('cors');
const rateLimit = require("express-rate-limit");
const connectDb = require("./config/dbConnection");
const app=express();
app.use(cors());

const  dotenv=require("dotenv").config();
const port=process.env.PORT || 5000;
connectDb();
app.use(express.json());
app.use(rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100
}));
app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/tasks",require("./routes/taskRoutes"));
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
}
);
