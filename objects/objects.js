let x = {
    n : 1
}
let y = x;
x.n=2; // just x's value changed

console.log("x.n:"+x.n);
console.log("y.n:"+y.n);