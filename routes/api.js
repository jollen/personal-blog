var express = require('express');
var router = express.Router();

var db = [];

/* REST APIs */
router.post('/1/post', function(req, res, next) {
	var title = req.query.title;
	var message = req.query.message;

	// 使用物件表示
	var article = {
		title: title,
		message: message
	};

	// (TBD) 存放至全域陣列
	db.push(article);

	//
	res.json({
		status: "OK"
	});
});

router.get('/1/post', function(req, res, next) {
	res.json(db);
});

module.exports = router;