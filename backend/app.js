import express from "express"
const app = express()
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import User from "./models/User.js"
dotenv.config();
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post("/api/singup",async (req, res) => {
  console.log(req.body.Username)
  const new_user = await User.create({
    username: req.body.Username,
    Password: req.body.Password
  });
  res.send("Hello World")
})
app.listen(port, () => {
    console.log("server running on port ",port)
})