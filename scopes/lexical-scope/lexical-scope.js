let a = "global";

function outer() {
    let a = "outer";

    function inner() {
        // inner, outer'ning a'sini ko'radi
        console.log(a); // "outer" ← lexical!
    }

    inner();
}

outer();