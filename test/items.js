var app = require('./../app.js');
var db = require('monk')('localhost/swords');
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

describe('PUT /api/swords/:id', function () {
  it('updates a sword', function (done) {
    request(app)
      .put('/api/swords/55c050595ae876b6b79ad318')
      .send({title: 'from test'})
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          assert.equal(res.body.title, 'from test')
          done()
        }
      })
  })
});

describe('GET /api/swords/', function () {
  it ('gets the swords index page', function (done) {
    request(app)
    .get('/api/swords/')
    .expect(200)
    .end(function(err, res) {
      if (err) {
        throw err;
      } else {
        assert.equal(res.body.message, 'rawr! it is working!')
        done()
      }
    })
  })
});

describe('DELETE /api/swords/:id', function () {
  it ('deletes one sword', function (done) {
    request(app)
    .delete('/api/swords/55c050595ae876b6b79ad318')
    .send({title: 'from test'})
    .expect(200)
    .end(function(err, res) {
      if (err) {
        throw err;
      } else {
        assert.equal(res.body.title, 'from test' )
        done()
      }
    })
  })
});

//Tests of Spell Routes
before(function(done){
  items.remove({}, function() {
    items.insert({Spell: 'Double Trouble', Author: 'WS'}, function () {
      done()
    })
  })
});

describe('GET /api/spells/', function () {
  it ('gets the spells index page', function (done) {
    request(app)
    .get('/api/spells')
    .expect(200)
    .end(function(err, res) {
      if (err) {
        throw err;
      } else {
        assert.equal(res.body.message, 'spells page is working')
        done()
      }
    })
  })
});
