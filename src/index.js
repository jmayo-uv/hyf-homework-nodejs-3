const express = require('express');
const app = express();



app.get('/', function(req, res){
    res.send("Hello World!");
})

app.get('/users', function(req, res){
    const users = []
    res.send(
            
    );
})

app.listen(3000, function(){
    console.log("server is listening");
})
