const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoDB = "mongodb://ankur:athlete-profile-app@ds163918.mlab.com:63918/heroku_xrmznccn";
var Athlete = require("./models/athlete.js");
var bodyParser = require('body-parser');
  
app.use(express.static(__dirname + '/../app'));
app.use(bodyParser.json());

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/athlete",function(req,res){
  
  Athlete.find({},function(err, athletes){
    if(err) {
      res.statusCode = 404;
      res.statusMessage = "Error fetching records from database";
      res.send();
    }
      res.statusCode = 200;
      res.statusMessage = "Success";
      res.send(athletes);
  });
 
});

app.post("/athlete",function(req,res){
  var data = req.body;
  var athleteInstance = new Athlete();
  athleteInstance.basicinfo = data.basicinfo;
  athleteInstance.about = data.about;
  athleteInstance.social = data.social;

  athleteInstance.save(function (err) {
    if (err) {
      res.statusCode = 404;
      res.statusMessage = "Error adding record to database";
      res.send();
    }
    res.statusCode = 200;
    res.statusMessage = "Athlete saved to database";
    res.send();
  });

});

 
const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const port = server.address().port;
});