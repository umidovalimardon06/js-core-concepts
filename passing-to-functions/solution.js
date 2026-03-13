function addPoint(player) {
    const copy = {player};
    copy.score = -999;
    return copy;
}

const p = {score: 0};
let value = Object(addPoint(p));
console.log(p);
console.log(value);

