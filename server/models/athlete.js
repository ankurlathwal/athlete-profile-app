
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Athlete = new Schema({
    basicinfo: {name: String, sport: String, nationality: String, gender: String, dob: Date},
    about: {description: String, location: String, team: String},
    social: {twitter: String, facebook: String}
});

var AthleteModel = mongoose.model('Athlete', Athlete );

module.exports = AthleteModel;