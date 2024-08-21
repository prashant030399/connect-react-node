var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    console.log(req.query);
    var empid = req.query.empid;
    var name = req.query.name;
    var rank = req.query.rank;

    console.log(empid + name + rank);
});

module.exports = router;
