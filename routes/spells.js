var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/swords');
var Spells = db.get('spells');


router.get('/', function (req, res) {
  res.status(200).json({message: 'spells page is working'})
});
