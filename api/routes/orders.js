var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    models.Orders.findAll().then(function(orders){
        res.json({
            orders:orders
        });
    });
});

module.exports = router;