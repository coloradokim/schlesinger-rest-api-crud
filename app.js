var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var swords = require('./routes/swords')
var potions = require('./routes/potions')
var spells = require('./routes/spells')

app.use('/api/swords', swords);
app.use('/api/potions', potions);
app.use('/api/spells', spells);

app.listen(process.env.PORT || 8080);
console.log('Woot! server started');

module.exports = app;
