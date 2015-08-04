var app = require('./../app.js');
var db = require('monk')('localhost/mochaTest');
var items = db.get('items');
var assert = require('assert');
var request = require('supertest');

/* To wipe the database and insert a new document with a specific ID. This allows use to use the ID in our PUT, GET and DELETE tests */
before(function(done){
  items.remove({}, function() {
    items.insert({title: 'Master Sword', _id: '55c050595ae876b6b79ad318'}, function () {
      done()
    })
  })
});

describe('POST api/swords', function () {
  it('creates a new sword', function (done) {
    request(app)
      .post('/api/swords')
      .send({title: 'from test'})
      .expect(201)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          done()
        }
      })
  })
});
