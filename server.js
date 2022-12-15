// import React from "react"
// express ejs uuid peer scoket.io

const express= require("express")
const app= express()
const server= require("http").Server(app)
app.set("view engine","ejs")
app.use(express.static("public"))

// create multiple rooms using uuid js library
 const {v4:uuidv4}= require("uuid")

 app.get("/",(req,res)=>{
    res.redirect(`${uuidv4()}`)
 })
 app.get("/:room",(req,res)=>{
    res.render("index",{roomId:req.params.room})
    // console.log(roomId)
 })


// app.get("/",(req,res)=>{
//   res.status(200).send("Hello world")
// })
server.listen(3030)