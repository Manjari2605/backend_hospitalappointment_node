const nodemailer=require('nodemailer');
const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"kalisettymanjari2605@gmail.com",
        pass:"kmqg amuk kujg tczi"

    }
});
let mailoptions = {
    from:"kalisettymanjari2605@gmail.com",
    to:"kalisettymanjari1226@gmail.com",
    subject:"blah bah..",
    text:"hi from the batch 4"
}

transport.sendMail(mailoptions,(err,info)=>{
if(err){
    console.log(err)
}else{
    console.log("mail sent")
}
})