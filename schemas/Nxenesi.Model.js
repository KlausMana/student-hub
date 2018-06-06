const mg = require('mongoose');
const Schema = mg.Schema;

const NxenesiSchema = new Schema({
	username: String,
	password: String,
	detyra: Array
});

module.exports = mg.model('Nxenesi', NxenesiSchema);