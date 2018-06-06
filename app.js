const express = require('express');
const app = express();
const mg = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const db = 'mongodb://studenthub:abc123@ds147390.mlab.com:47390/studenthub';
const Detyra = require('./schemas/Detyra.model');



mg.Promise = global.Promise;
const conn = mg.connection;
mg.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {('index');
	res.render('index');
});

app.post('/mesuesDashboard', (req, res) => {
	let emerMesues = req.body.username;
	Detyrat.find({"mesues" : emerMesues}).exec(function(err, detyra){
		res.render('mesuesDashboard', {
			detyrat: detyra
		})
	});
});

port = 1234;
app.listen(port, () => {
	console.log('Finished');
});
