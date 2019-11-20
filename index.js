let myArray = [2,4,6,8,10];

function simpleMultiply(a) {
    let output =1;
    for(let i=0; i<a.length; i++) {
        output *= a[i];
    }
    return output;
}

console.log(simpleMultiply(myArray));
