var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.login) {
    res.redirect('/home')
  } else {
    res.render('login', { loginError: req.session.loginError });
    req.session.loginError = false
  }


});


const emailDB = "prnz@gmail.com"
const passwordDB = "111"


router.post('/login', function (req, res) {
  const { email, password } = req.body
  if (email === emailDB && password === passwordDB) {
    req.session.login = true
    res.redirect('/home')
  } else {
    req.session.loginError = true
    res.redirect('/')
  }
})


router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})



module.exports = router;
