
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const app = express();

// === FIX FOR PROXY ISSUE ON RENDER ===
app.set("trust proxy", 1); // Trust first proxy so express-rate-limit works

// === MIDDLEWARES ===
app.use(cors());
app.use(express.json());

// === RATE LIMITER ===
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per window
});
app.use(limiter);

// === DATABASE CONNECTION ===
connectDb();

// === ROUTES ===
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// === START SERVER ===
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
