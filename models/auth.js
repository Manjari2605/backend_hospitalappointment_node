const mongoose=require("mongoose")
const Authschema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    }
})
module.exports=mongoose.model("Users",Authschema)