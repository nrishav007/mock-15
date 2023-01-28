const express=require("express");
const env=require("dotenv");
env.config();
const cors=require("cors");
const quizUserModel = require("./Models/Quiz.model");
const dbconnect = require("./Configs/db");
const e = require("express");
const app=express();
const port=process.env.PORT ||6000;
app.use(cors({
    origin:"*"
}))
app.use(express.json());

app.get("/quiz",async(req,res)=>{
    let limits=req.query.amount;
    let difficult=req.query.difficulty;
    let type=req.query.category;
    let setlimits;
    let setcategory=[];
    if(limits==undefined){
        setlimits=10
    }
    else{
        setlimits=limits
    }
    if(difficult!==undefined){
        setcategory.push({difficulty:difficult})
    }
    if(type!==undefined){
        setcategory.push({category:type})
    }
    let page=1;
    let m = await quizUserModel.find({$and:setcategory}).limit(setlimits).skip(setlimits*(page-1));
    res.status(200).send(m)
})

app.get("/",(req,res)=>{
    res.status(200).send({msg:"backend deployed"});
})

app.listen(port,()=>{
dbconnect;
    console.log(`listening to http://localhost:${port}`)
})