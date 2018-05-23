var price = require('./price.js');

var result = price.itemPriceWithTax1 (5.99, 0.09, function(status, msg){

    console.log(status);
    console.log(msg);

}); 

var res = console.log(price.itemPriceWithTax2 (5.99, 0.09));

