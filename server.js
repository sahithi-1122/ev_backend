
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const app = express();

// ✅ FIX FOR RENDER / PROXY
app.set("trust proxy", 1);

// ✅ MIDDLEWARES
app.use(cors());
app.use(express.json());

// ✅ SAFE RATE LIMIT (prevents dashboard blinking)
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 500,               // ✅ increased limit
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// ✅ DATABASE
connectDb();

// ✅ ROUTES
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// ✅ SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
