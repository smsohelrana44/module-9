
var express=require('express')
app=express();

app.get('/',function(req,res){
    res.send("My Name is Sohel Rana")
})
app.listen(8080,function(){
    console.log("Server Success")
})