const express = require('express');
const app = express();

app.use(express.json())

var users = []

//Create a Server that would answer to "/" with "Hello World"
app.get('/', function(req, res){
    res.send("Hello World!");
})

//Create an endpoint that would answer to GET to /users with the list of users
app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/user', function(req, res){
    users.push({id:0})
    res.json(users);
})

//Create an endpoint to GET to /user/:id
app.get('/user/:id', function(req, res){
    //idUser = users.length;
    var newUser = {
        id: parseInt(req.params.id),
        //name: req.body.name
    }  
    users.push(newUser)
    res.status(200).send(newUser)



    // const user = users.find(user => user.id == req.params.id)
    // if(!user){
    //     res.status(404)
    //        .send('No se encontró el usuario indicado')
    // } else {
        //res.send(users)
    // }
})


//Create an endpoint to POST to /user/:id
app.post('/user/:id', function(req, res){
    //idUser = users.length;
    var newUser = {
        id: req.params.id,
        //name: req.body.name
    }  
    users.push(newUser)
    res.status(200).send(users.id)
})

//Create an endpoint to DELETE to /user/:id

// app.delete('/user/:id', (req, res) => {

//     if(users.length > 0){
//         users = [];
//         res.status(202).json({
//             ok: true
//         })
//     } else {
//         res.status(204).json({
//             ok: true
//         });
//     }

// })

app.delete('/user/:id', function(req, res){
    const user = users.find(user => user.id == req.params.id)
    res.status(202)
    if(!user){
        res.status(204)
           .json({
                OK: true
            })
    } else {

        users = []
        

        // const index = users.indexOf(user)
        // users.splice(index,1)
        // res.status(202)
        res.status(202)
           .json({
                OK: true
            })
    }
})

app.listen(3000, function(){
    console.log("server is listening");
})
