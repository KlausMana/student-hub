const mg = require('mongoose');
const Schema = mg.Schema;

const DetyraSchema = new Schema({
	emri: String,
	description: String,
	mesuesi: String,
	nxenesit: Array
});

module.exports = mg.model('Nxenesi', MesuesSchema);