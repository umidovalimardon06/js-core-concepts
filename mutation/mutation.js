const user = {
    age : 19
}

user.age = 21; // mutation-as-well
const userTwo = user;
userTwo.age = 22; // mutation-ass-well

console.log(user.age);
console.log(userTwo.age);