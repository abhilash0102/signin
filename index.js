//importing express
const express = require('express')
const foodModel = require("./model")
const cors =require('cors')
// 2.initalization
const app =express()
// middelwere || passing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
//api creation
app.get('/abhilash',(req,res)=>{
    res.send("I am abhilash")
})
//  api for adding data
app.post('/add',async(req,res)=>{
    var result = await new foodModel(req.body)
    result.save()
    res.send("data added")

})

// 4.port
app.listen(3006,()=>{
    console.log("port 3006 is up and running")
})