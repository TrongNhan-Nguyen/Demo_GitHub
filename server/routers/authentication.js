const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentication');
router.get('/', (req, res, next) => {
  return res.redirect('/login');
});
router.post('/login',authController.login)
router.post('/register',authController.register)

module.exports = router;
