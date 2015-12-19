var express = require('express');
var compression = require('compression')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/about', compression());
router.get('/about', function(req, res, next) {
	res.render('about');
});

module.exports = router;
