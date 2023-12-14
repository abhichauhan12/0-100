

const express = require("express");


const app = express();
const port = 3001;

app.get('/',function(req,res){
    res.send('Hello world')

})


app.get('/home',function(req,res){
    res.send('Hello this is home page')

})


console.log("working")
app.listen(port)
