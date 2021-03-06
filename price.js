checkPrice = {};

//checking if price is a number and a valid positive integer
var isNumber = function (num){
    return  typeof num === "number" && num > 0;

};

//itemPriceWithTax1 returns a boolean here
checkPrice.itemPriceWithTax1 = function (potentialPrice , taxRate, callBack) {

    if (typeof callBack !== "function") return callBack(false, 'Error');

    var res1 = isNumber(potentialPrice, taxRate);

    var res2  = (potentialPrice * taxRate) + potentialPrice;

    if (res1 && res2)  {

        callBack(true, null);

    } else {

        callBack(false, 'error, enter a valid whole number')
    }
};

//itemPriceWithTax2 returns the computed values here
checkPrice.itemPriceWithTax2 = function (potentialPrice , taxRate) {

    var res1 = isNumber(potentialPrice, taxRate);

    var res2  = (potentialPrice * taxRate) + potentialPrice;

    return res1 && res2;
};
         

module.exports = checkPrice;