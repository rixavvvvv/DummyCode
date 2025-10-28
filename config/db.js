const mongoose=require("mongoose");

function connectDB()
{
    const db_url=process.env.DB_URL;
    mongoose.connect(db_url)
        .then(()=> console.log("DB connected"))
        .catch(err=>console.log("Error in DB connect"));
}

module.exports=connectDB;