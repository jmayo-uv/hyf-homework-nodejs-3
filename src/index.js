const express = require('express');
const app = express();

app.use(express.json())

var users = []

app.get('/', function(req, res){
    res.send("Hello World!");
})

app.get('/users', function(req, res){
    res.send(users)
})

app.post('/user/:id', function(req, res){
    //idUser = users.length;
    var newUser = {
        id: req.params.id,
        name: req.body.name
    }  
    users.push(newUser)
    res.status(201).send(newUser)
})

app.get('/user/:id', function(req, res){
    const user = users.find(user => user.id == req.params.id)
    if(!user){
        res.status(404)
           .send('No se encontró el usuario indicado')
    } else {
        res.send(users)
    }
})

app.delete('/user/:id', function(req, res){
    const user = users.find(user => user.id == req.params.id)
    if(!user){
        res.status(404)
           .send('No se encontró el usuario indicado')
    } else {
        const index = users.indexOf(user)
        users.splice(index,1)
        res.status(200).send('Usuario borrado')
    }
})

app.listen(3000, function(){
    console.log("server is listening");
})
