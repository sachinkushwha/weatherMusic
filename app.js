const express=require('express');
const weatherRouter=require('./router/wetherRouter');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded());
app.use(weatherRouter);
app.listen(3001,()=>{
    console.log('server start on http://localhost:3001');
})