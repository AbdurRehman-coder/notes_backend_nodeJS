const express = require('express');
const app = express();

app.get('/', function(req, res){
res.send('welcome to the home page')
})

app.listen(5000, function(){
    console.log('listening on server PORT: 5000');
})