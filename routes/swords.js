var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.status(200).json({message: 'rawr! it is working!'});
});

module.exports = router
