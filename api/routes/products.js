var models = require('../models');
var express = require('express');
var router = express.Router();
// var querystring = require('querystring');
// var product_obj = {};

router.get('/',function (req,res){
	//code for retrieving products
	models.Products.findAll().then(function(products){
		res.json({
			products:products
		});
	});
});

router.get('/',function (req,res){
    models.Products.findAll().then(function(products){
        res.json({
            products:products
        })
    })
})

//add products
router.post('/',function (req,res){

    console.log('Got first post req');
    
    var newProduct = JSON.parse(req.body.data);
    console.log(typeof newProduct);
    console.log(newProduct);

    // models.Products.create(newProduct).then(function (products){
    //     console.log('res: '+res);
    //     console.log('products: '+products);

    //     res.json({
    //         products:products
    //     });
    // });
})

router.get('/test',function (req,res){
    var product_obj = {
        name: 'apple3',
        description: 'red fruit',
        image: 'http://dreamatico.com/data_images/apple/apple-2.jpg',
        category: 'Fruit',
        quantity: 4,
        price: 23.40,
        status: 'Active',
    }

    models.Products.create(product_obj).then(function (products){
        res.json({
            products:products
        });
    });

router.post('/',function (req,res){

})


});
module.exports = router;