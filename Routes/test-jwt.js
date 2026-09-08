// controllers/test-jwt.js
const ctrl = require('../Controllers/testJwtCtrl')
const express = require('express');
const router = express.Router();

router.get('/sign-token', ctrl.signToken);
router.post('/verify-token',ctrl.verifyToken)

module.exports = router;