var express=require('express');
var app=express();
var r1=0;
app.use('/images',express.static(__dirname+'/images'));
app.use('/css',express.static(__dirname+'/css'));
app.use('/books',express.static(__dirname+'/books'));
app.use('/fonts',express.static(__dirname+'/fonts'));
app.use('/json',express.static(__dirname+'/json'));
app.use('/',express.static(__dirname+'/'));
app.get('/',function(req,res) {
    res.sendFile(__dirname+"/index4.html");
});
app.get('/game1.html',function(req,res) {
    res.sendFile(__dirname+"/game1.html");
});
app.get('/data',function(req,res) {
    r1=Math.PI-(req.query.rad);
    res.send(""+r1);
});
var server=app.listen(5000,function() {
    console.log("start");
});