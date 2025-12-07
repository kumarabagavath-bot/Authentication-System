const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/auth_db");

app.use("/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
