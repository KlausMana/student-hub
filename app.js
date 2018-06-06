const express = require('express');
const app = express();
const mg = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const db = 'mongodb://studenthub:abc123@ds147390.mlab.com:47390/studenthub';
const Detyrat = require('./schemas/Detyra.model');
const Plotesim = require('./schemas/Plotesim.Model');



mg.Promise = global.Promise;
const conn = mg.connection;
mg.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {('index');
	res.render('index');
});

app.get('/loginMesues', (req, res) => {
	res.render('loginMesues');
});

app.get('/loginNxenes', (req, res) => {
	res.render('loginNxenes');
});

app.post('/detyratMesues', (req, res) => {
	let emerMesues = req.body.username;
	Detyrat.find({"mesues" : emerMesues}).exec(function(err, detyra){
		res.render('detyra_mesuesi.ejs', {
			detyrat: detyra
		});
	});
});

app.get('/mesuesDashboard'){
	res.render('dashboardMesues.ejs');
}

app.post('/detyratNxenes', (req, res) => {
	let idNxenes = req.body.username;

	Detyrat.find({"nxenesit" : idNxenes}).exec( (err, detyra) => {
		res.render('detyra_nxenesi.ejs', {
			detyrat: detyra
		});
	});

});

app.get('/nxenesDashboard'){
	res.render('dashboardNxenes.ejs');
}

app.get('/krijoDet', (req, res) => {
	res.render('formMesues');
});

app.post('/detyraSukses', (req, res) => {
	let nxenesStr = req.body.nxenesit;
	const nxenesArr = nxenesStr.split(', ');
	const emri = req.body.emri;
	const kerkesat = req.body.kerkesat;
	const Detyra = {
		emri : emri,
		description : kerkesat,
		mesuesi : "Mes1",
		nxenesit : nxenesArr
	};
	conn.collection('detyras').insert(Detyra);

	res.render('detyraSukses');
});

app.get('/plotesoDetyren', (req, res) => {
	res.render('plotesoDetyren');
});

app.post('detyrePlotesuar', (req,res) => {
	const detyra = req.body.detyra;
	const file = req.body.file;
	const Plotesim = {
		detyra : detyra,
		nxenesi: "Nx1",
		plotesimi: file
	};
	conn.collection('plotesims').insert(Plotesim);

	res.render('detyrePlotesuar');
});

port = 1234;
app.listen(port, () => {
	console.log('Finished');
});
