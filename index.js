const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const dbconnect = require("./src/config/dbconnect")
const authRoutes = require("./src/routes/authRoutes")
const userRoutes = require("./src/routes/userRoutes")
const {Router} = require("./src/routes/authRoutes")

// db connection
dbconnect()

// middleware
app.use(express.json())

// routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})