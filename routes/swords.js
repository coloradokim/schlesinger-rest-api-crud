var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/swords');
var Swords = db.get('swords');


router.get('/', function (req, res) {
  res.status(200).json({message: 'rawr! it is working!'})
});

/* Create a New Sword */
router.post('/', function(req, res) {
  Swords.insert(req.body, function(err, sword) {
    if (err) {
      res.send(err)
    }
    res.status(201).json(sword)
  })
});


/* Get One Sword */
router.get('/:id', function (req, res) {
  Swords.findOne({_id: req.params.id}, function (err, sword) {
    if (err) {
      res.send(err)
    }
    res.status(200).json(sword)
  })
});

/* Update a sword with new information */
router.put('/:id', function (req, res) {
  Swords.findAndModify({_id: req.params.id}, req.body, function (err, sword) {
    if (err) {
      throw err
    }
    res.status(200).json(sword)
  })
});

/* Delete One Sword */
router.delete('/:id', function (req, res) {
  Swords.remove({_id: req.params.id}, function (err, sword) {
    if (err) {
      res.send(err)
    }
    res.status(200).json(sword)
  })
});


module.exports = router
