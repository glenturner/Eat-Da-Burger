var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res){
    res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
    burgers.all(function(data){
        var hbsObject = {burgers: data};
        // Testing/Debugging //
        console.log("This is controller data " + data);

        console.log("Controller Hbs Object" + JSON.stringify(hbsObject));

        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req, res){
    burgers.create(['burger_name'], [req.body.b_name], function(data){
        res.redirect('/burgers');
        // Testing/Debugging //
        console.log("This is req.body.b_name: " + req.body.b_name);
    });
});

router.put('/burgers/update/:id', function(req, res){
    var condition = 'id = ' + req.params.id;

    console.log('condition ', condition);

    burgers.update({'devoured': req.body.devoured}, condition, function(data){
        res.redirect('/burgers');
    });
});

router.delete('/burgers/delete/:id', function(req,res){
    var condition = 'id = ' + req.params.id;
    burgers.delete(condition, function (){
        res.redirect("/burgers");
    });
});

module.exports = router;


