var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/swords');
var Swords = db.get('swords');

router.get('/', function (req, res) {
  res.status(200).json({message: 'rawr! it is working!'});
});

/*create a new sword*/
router.post('/', function(req, res) {
  Swords.insert(req.body, function(err, sword) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(sword)
  });
});

module.exports = router
