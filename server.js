const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
port = 3000;

// Create express app
const app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function(){
console.log("Running on ", port);
});