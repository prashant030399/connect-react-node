var express = require('express');
var router = express.Router();

router.get('/', function(req,res){

console.log(req.query);
var a=req.query.x;
var b=req.query.y;
 


var c = parseInt(a) + parseInt(b);
console.log("sum is" + c);





})
module.exports=router;