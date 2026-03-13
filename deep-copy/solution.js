const original = {
    name : "Ali",
    address : {
        city : "NY"
    }
}
const copy = structuredClone(original);

copy.name = "Don";
copy.address.city = "La";

console.log(original);
console.log(copy);