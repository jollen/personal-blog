var express = require('express');
var router = express.Router();

/* REST APIs */
router.post('/2/post', function(req, res, next) {
	var person;

	person = {
		'name': 'jollen',
		'email': 'jollen@jollen.org'
	};

	res.json(person);
});

router.get('/2/post/:id', function(req, res, next) {
	var id = req.params.id;

	res.end();
});

module.exports = router;