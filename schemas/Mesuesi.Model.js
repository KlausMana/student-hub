const mg = require('mongoose');
const Schema = mg.Schema;

const MesuesiSchema = new Schema({
	username: String,
	password: String,
	detyra: Array
});

module.exports = mg.model('Mesuesi', MesuesiSchema);