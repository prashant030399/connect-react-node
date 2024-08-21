var express = require('express');
var app = express();

var cors = require('cors');
var show = require('./show.js');


app.use('/show', show );
app.use(cors ());

  app.listen(8099);
  console.log("Run at 8099");

  

