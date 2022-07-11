var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fashion Week', subtitle: 'Welcome to Our Page, where we give you insight on the lkastest fashion on Fashion week', subtitle2: ' Check our: ' });
});





module.exports = router;