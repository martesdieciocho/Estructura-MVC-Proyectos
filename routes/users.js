var express = require('express');
var router = express.Router();
const UsersController = require('../Controllers/usersController');

/* GET users listing. */
router.get('/', UsersController.users );

module.exports = router;
