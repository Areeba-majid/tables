//for(let count =1; count < 10; count++){
//  console.log(count)}
//array function 
var printTble = function (num) {
    for (var i = 1; i <= 10; i++) {
        console.log("".concat(num, " * ").concat(i, " = ").concat(num * i));
    }
};
printTble(6);
