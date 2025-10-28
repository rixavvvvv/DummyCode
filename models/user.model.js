const mongoose=require("mongoose");

const userSchema=mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },

        email: {
            type: String,
            required:true,
            unique: true
        },

        role:{
            type:String,
            enum: ["buyer", "seller"],
            required:true
        }
        
    },
    {
        //createdAT
        //UpdatedAT
        timestamp:true
    }
)


const User=mongoose.model("User", userSchema);
module.exports=User;
