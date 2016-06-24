var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

var con = mongoose.connect('mongodb://localhost/grocery');
mongoose.connection.on('open', function(){
    console.log('connected.');
    con.connection.db.dropDatabase(function(err, result){
        var items=[{
            name:"Ice Cream"
        },{
            name:"Waffles"
        },{
            name:"Candy",
            purchased:true
        },{
            name:"Snarks"
        }];

        items.forEach(function(item){
            new GroceryItem(item).save();
        });
    });
});