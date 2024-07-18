
const express = require('express')
const app = express()


app.get("/",(req,res)=>{
    res.send("hii");
})
app.listen(8000, ()=>{
    console.log("app is started port number",8000)
    console.log("app is started port number")
    console.log("app is started port number")
})