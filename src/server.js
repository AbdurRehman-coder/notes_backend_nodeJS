 // Initialization
const { response } = require('express');
const express = require('express');
const app = express();
// import using ES6
// import mongoose  from 'mongoose';
const mongoose = require('mongoose');
const Note = require('./models/Note');

mongoose.connect('mongodb+srv://abdurrehman:Ar5780268@cluster0.stpozdd.mongodb.net/notes').then(function(){
// Defined App Routes
app.get('/', function(req, res){
    res.send('WELCOME TO HOME Landi kotal');
    });
    
    app.get('/notes/list', async function(req, res) {
        /// find will get the all avialable data from mongoose.
        var notes = await Note.find();
        res.json(notes);

    res.send('Welcome to Notes page');
    })

    app.get('/notes/add', async function(req, res) {
        /// add data to mongoose.
    
        const newNote = Note({
            "id" : 0001,
            'userid' : 'abdurrehmanlkl786@gmail.com',
            'title' : 'this is my second note',
            'content' : 'content is not available'
        });
        // save file to mongoose
        await newNote.save();

        var respon = { message: 'data added successful!' };
        console.log('data added ============== ' + respon)
        res.json(respon)
        
        
    res.send('Welcome to Notes page');
    })
});


// Starting the server on PORT
app.listen(5000, function(){
    console.log('listening on server PORT: 5000');
})

