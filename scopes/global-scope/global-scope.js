var a = 100;
let b = 101;

function test() {
    console.log(`Calling from function:${a},${b}`);
}

console.log(`Calling from global:${a},${b}`);
test();