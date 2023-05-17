var express = require('express');
var router = express.Router();
const {register,Login,userId,} = require('../controller/login')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',Login)
router.get('/',Login)

router.post('/register',register)
// router.get('/main',main)

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});


module.exports = router;
