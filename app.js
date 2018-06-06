const express = require('express');
const app = express();
const mg = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


mg.Promise = global.Promise;
const conn = mg.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('index');
});

port = 1234;
app.listen(port, () => {
});

