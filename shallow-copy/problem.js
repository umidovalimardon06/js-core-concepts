const original = {
    name : "Ali",
    address : {
        city : "NY"
    }
}
const copy = original;

copy.name = "Don";
copy.address.city = "La";
/*problem ...
original is also copied!*/

console.log(original);
console.log(copy);