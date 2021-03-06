function descendingOrder(n) {
    let myNum = n.toString().split("");
    myNum = myNum.sort(function (a, b) {
        return b - a;
    });
    return parseInt(myNum.join(''), 10);
}

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(111)); // 111
console.log(descendingOrder(15)); // 51
console.log(descendingOrder(1021)); // 2110
console.log(descendingOrder(0123456789)); // 987654321