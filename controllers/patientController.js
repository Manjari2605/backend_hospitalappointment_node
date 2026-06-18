const Patient=require("../models/Patient");
const addPatient=async(req,res)=>{
    try{
        const patient=await Patient.create(req.body);
        res.status(201).json({
            message:"Patient added successfully",
            patient
        });
    
    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}
module.exports={
    addPatient
};