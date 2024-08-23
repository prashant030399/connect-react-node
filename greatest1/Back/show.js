var express = require('express');
var router = express.Router();

router.get('/', function(req,res){

console.log(req.query);
var a=req.query.x;
var b=req.query.y;
var c= req.query.z;
 
if(parseInt(a)> parseInt(b) && parseInt(a) > parseInt(c)){
    console.log(a + " is greatest");
}
else if(parseInt(b) > parseInt(a) && parseInt(b)> parseInt(c)){
    console.log(b + " is greatest");
}
else {
    console.log(c + "is greatest");
}


});
module.exports=router;