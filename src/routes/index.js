var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pastizales Nativos' });
});
/* GET saludo page. */
router.get('/saludo', function(req, res, next) {
  res.render('saludo',{ title: 'Pastizales Nativos' });
});

module.exports = router;
