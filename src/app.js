const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) =>{

    const user = new User(req.body);
    
    try{
        await user.save();
        res.send("User Saved Successfully");
    }
    catch(err){
        res.status(400).send("Error Saving User: " + err.message);
    }
    
});

connectDB()
    .then(()=>{
    console.log("MongoDB Connected");
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    });
    })
    .catch((err)=>{
        console.error("MongoDB Connection Error: ", err);
    });

