var express = require('express'),
    router  = new express.Router();

// Require controllers.
var usersCtrl = require('../controllers/users');

// Require token authentication.
var token = require('../config/token_auth');

// users resource paths:
router.post('/api/users',    usersCtrl.create);
router.get( '/api/users/me', token.authenticate, usersCtrl.me);

router.post('/api/token',    token.create);

module.exports = router;
