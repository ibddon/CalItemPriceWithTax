checkPrice = {};


var isNumber = function (num){
    return  typeof num === "number" && num > 0;

};

checkPrice.totalWithPrice = function (potentialPrice , taxRate, callBack) {

    if (typeof callBack !== "function") return callBack(false, 'Error');

    var res1 = isNumber(potentialPrice, taxRate);

    var res2  = (potentialPrice * taxRate) + potentialPrice;

    if (res1 && res2)  {

        callBack(true, null);

    } else {

        callBack(false, 'error, enter a valid whole number')
    }
};

checkPrice.totalWithPrice2 = function (potentialPrice , taxRate) {

    var res1 = isNumber(potentialPrice, taxRate);

    var res2  = (potentialPrice * taxRate) + potentialPrice;

    return res1 && res2;
};
         

module.exports = checkPrice;