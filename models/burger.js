// Import the ORM to create functions that will interact with the database.

var orm = require('../config/orm.js');

var burgers = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        });
    },
    create: function(col, vals, cb){
        orm.create('burgers', col, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update('burgers', objColVals, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete('burgers', condition, function(res){
            cb(res);

        });
    }
};


module.exports = burgers;