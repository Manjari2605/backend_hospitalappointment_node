const mongoose=require("mongoose");
const PatientSchema= new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    mobile:{
        type:String 
    },
    disease:{
        type:String
    },
    appointment:{
        type:Date
    }
});
module.exports=mongoose.model("Patient", PatientSchema);