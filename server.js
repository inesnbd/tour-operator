var path = require('path');
var express = require('express');
Promise = require('bluebird');
mongoose = Promise.promisifyAll(require('mongoose'));
fs = Promise.promisifyAll(require('fs'));
logLib = require('./lib/log');
app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : true}));

// config
app.use(express.static('public'));
mangoose.connect('mangodb://localhost/tourOperator');

//import routing 
require('./routing/callback');
require('./routing/planes');

//import models
models = require('./models');

// localhost port 8080
app.listen(8080);




