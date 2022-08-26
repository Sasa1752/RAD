const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("ExpressJs Hello World!")
})

app.listen(port,()=>{
    console.log('success')
})
