const express = require('express');
const app = express();

const users = []

app.get('/', function(req, res){
    res.send("Hello World!");
})

app.get('/users', function(req, res){

    res.send(
        users
    );
})

app.post('/users/:id', function(req, res){

        res.send("Hello World!");
})

app.get('/users/:id', function(req, res){
    newUser = {id: req.params.id};
    
    users.push(newUser)
    res.send(users)

})

app.listen(3000, function(){
    console.log("server is listening");
})
