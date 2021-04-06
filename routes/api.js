var express = require('express');
var router = express.Router();

var arr = ["Hello", "world", "test", "string"];


/* GET home page. */
router.get('/', function(req, res, next) {
   res.send("hello world");
});

router.get('/arr', function(req, res, next) {
    console.log(arr);
    res.json(arr);
});

router.get('/:name', function(req, res, next) {
    console.log(arr[+req.params.name]);
    res.send(arr[+req.params.name]);
});

router.get('/add/:name', function(req, res, next) {
    arr.push(req.params.name);
    res.send("ok");
});

module.exports = router;