const express=require('express');
const weatherRouter=express.Router();

weatherRouter.get('/loc',async(req,res,next)=>{
    const {lat,lon}=req.query;
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=31.5766068&lon=74.9912212&appid=0bfd319edcbd0ebbfe80278441cd160a`);
    const data=await response.json();
    const sambhav=parseFloat((3.6*parseFloat(data.wind.speed)).toFixed(2));
    res.render('index copy',{mosum:data.weather[0].description,city:data.name,main:data.main,wind:sambhav});
});


weatherRouter.post('/',async(req,res,next)=>{
    const city=req.body.city;
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'0bfd319edcbd0ebbfe80278441cd160a'}`);
    const data=await response.json();
    const sambhav=parseFloat((3.6*parseFloat(data.wind.speed)).toFixed(2));
    res.render('index copy',{mosum:data.weather[0].description,city:data.name,main:data.main,wind:sambhav});
});


weatherRouter.get('/',async(req,res,next)=>{
    let city='Patna';
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'0bfd319edcbd0ebbfe80278441cd160a'}`);
    const data=await response.json();
    res.render('index',{mosum:data.weather[0].description,city:data.name,main:data.main,wind:data.wind.speed});
});
module.exports=weatherRouter;