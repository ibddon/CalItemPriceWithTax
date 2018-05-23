var price = require('./price.js');

var result = price.totalWithPrice(5.99, 0.09, function(status, msg){

    console.log(status);
    console.log(msg);

});

var res = console.log(price.totalWithPrice2(5.99, 0.09));

