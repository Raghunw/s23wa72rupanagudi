var express = require('express');
var router = express.Router();

var rand1=Math.random()*100;
var rand2=Math.random()*100;
var n1=0;
var n2=0;
var n3=0;
var n4=0;



/* GET users listing. */
router.get('/', function(req, res, next) {
  
  n1=Math.pow(rand1,rand2);
  n2=Math.sign(rand1);
  n3=Math.tanh(rand1);
  n4=Math.trunc(rand1);
  
  res.send(`The random values are: ${rand1},${rand2},<br>pow applied to rand1 and rand2 is: ${n1},<br>sign applied to rand1 is: ${n2},<br>tanh applied to rand1 is: ${n3},<br>trunc applied to rand1 is: ${n4}`);


});

module.exports = router;

