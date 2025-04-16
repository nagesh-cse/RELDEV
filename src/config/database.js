const mongoose = require("mongoose");

const connectDB = async ()=>{
    await mongoose.connect(
        "mongodb+srv://nageshkumarknp2019:oGBIIQLpAi5Umk2J@mymongodb.mml7hvv.mongodb.net/relDev"
    )
}

module.exports = connectDB;



