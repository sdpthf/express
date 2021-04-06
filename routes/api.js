var express = require('express');
var router = express.Router();

var arr = ["Hello", "world", "test", "string"];


/* GET home page. */
router.get('/:name', function(req, res, next) {
  console.log(req.params.name);
    console.log(arr[+req.params.name]);
    res.json(arr);
});

module.exports = router;