/*
   file; users.js
   author; Josh Mineiro
   website; http://comp2068-assignment1part2-joshmineiro.azurewebsites.net
   description; gets user listing
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
