const express = require("express");

const app = express();

app.use("/hello", (req, res)=>{
    res.send("This is for saying HELLO")
})

app.use((req, res)=>{
    res.send("Hello from server!")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});