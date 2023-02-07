 // Initialization
const express = require('express');
const app = express();
// import using ES6
// import mongoose  from 'mongoose';
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abdurrehman:Ar5780268@cluster0.stpozdd.mongodb.net/notes').then(function(){
// Defined App Routes
app.get('/', function(req, res){
    res.send('welcome to the home page');
    });
    
    app.get('/notes', (req, res) => {
    res.send('Welcome to Notes page');
    })
});


// Starting the server on PORT
app.listen(5000, function(){
    console.log('listening on server PORT: 5000');
})

// step1: initialize npm in the project to install other packages in libraries in the folder.
// > npm init
// Now to use express, install the express package
// > npm install express
// > npm install mongoose [mongoose is used to connect to MongoDB from here NodeJS]