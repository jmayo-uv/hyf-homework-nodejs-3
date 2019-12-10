const express = require('express');
const app = express();

var users = []

app.get('/', function(req, res){
    res.send("Hello World!");
})

app.get('/users', function(req, res){
    res.send(users)
})

app.get('/users/:id', function(req, res){
    const user = users.find(user => user.id === req.params.id)
    if(!user){
        res.status(404)
           .send('No se encontró el usuario indicado')
    } else {
        res.send(users)
    }
})

app.post('/users/:id', function(req, res){
    idUser = users.length;
    var newUser = {
        id: idUser,
        name: req.body.userName
    }  
    users.push(newUser)
    res.status(201).send(newUser)
})


app.listen(3000, function(){
    console.log("server is listening");
})
