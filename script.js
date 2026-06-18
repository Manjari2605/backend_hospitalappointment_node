const express=require('express');
const app=express()
const users=[{id:1, name:"vijay"},
    {id:2,name:"suresh"}
]
app.get("/",(roq,res)=>{
    res.status(200).send("<h2>Manjari</h2>")
})