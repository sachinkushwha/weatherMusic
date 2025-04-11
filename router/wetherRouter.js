const express=require('express');
const weatherRouter=express.Router();

weatherRouter.post('/',async(req,res,next)=>{
    const city=req.body.city;
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'0bfd319edcbd0ebbfe80278441cd160a'}&units=metric`);
    const data=await response.json();
    const sambhav=parseFloat((3.6*parseFloat(data.wind.speed)).toFixed(2));
    console.log(sambhav);
    res.render('index',{mosum:data.weather[0].description,city:data.name,main:data.main,wind:sambhav});
});
weatherRouter.get('/',async(req,res,next)=>{
    let city='Patna';
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'0bfd319edcbd0ebbfe80278441cd160a'}&units=metric`);
    const data=await response.json();
    res.render('index',{mosum:data.weather[0].description,city:data.name,main:data.main,wind:data.wind.speed});
});
module.exports=weatherRouter;