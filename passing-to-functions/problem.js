/* here is function mutating object*/
function addPoint(player) {
    player.score = -999;
    /* taking original object
    * and mutating-returning*/
}

const p = {score:100};
addPoint(p);
console.log(p);