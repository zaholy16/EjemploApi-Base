
var express = require('express') //llamamos a Express
var app = express()       
var cors = require('cors');
var bodyParser = require('body-parser') 

var port = process.env.PORT || 1339 // se establece el puerto que se usará

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors());

var router = require('./routes');
app.use('/api',router);

//se inicializa el servidor
app.listen(port);
console.log('API escuchando en el puerto ' + port);


