var express = require('express');
var router = express.Router();

router.get('/', function(req,res){

    console.log(req.query);
    var rno = req.query.rno;
    var namee = req.query.namee;
    var marks = req.query.marks;

    console.log(rno + " " + namee + " " + marks );
    
});

module.exports = router;


