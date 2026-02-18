const express = require('express');
const app = express();
const PORT =3000;
 // addition
 app.get('/add',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(isNaN(a)|| isNaN(b)){
        return res.status(400).json({error: 'invalid numbers'});
    }
    res.json({ result: a+b});
 });
 //sub
  app.get('/sub',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(isNaN(a)|| isNaN(b)){
        return res.status(400).json({error: 'invalid numbers'});
    }
    res.json({ result: a-b});
 });
 //mul
  app.get('/mul',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(isNaN(a)|| isNaN(b)){
        return res.status(400).json({error: 'invalid numbers'});
    }
    res.json({ result: a*b});
 });

 /// div
  app.get('/div',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(isNaN(a)|| isNaN(b)){
        return res.status(400).json({error: 'invalid numbers'});
    }
    res.json({ result: a/b});
 });

 app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
 })