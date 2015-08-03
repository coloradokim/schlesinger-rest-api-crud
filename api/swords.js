var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/swords');
var Swords = db.get('swords');

router.get('/', function (req, res) {
  res.status(200).json({message: 'rawr! it is working!'});
});

module.exports = router
