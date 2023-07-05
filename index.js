

// automatically load .env

require('dotenv').config()

//import express

const express=require('express')

//importcors
const cors= require('cors')


//import connection.js

require('./db/connection')

//import routes

const router=require('./routes/router')

//create an app using express

const server= express()

//define port

const PORT =5000

//use in server app
server.use(cors())
server.use(express.json())
server.use(router)

//run

server.listen(PORT,()=>{
    console.log('listening on port'+PORT);
})


//routes -localhost:5000
server.get('/',(req,res)=>{
    res.status(200).json("e kart server starts")
})