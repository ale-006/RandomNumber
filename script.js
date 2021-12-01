function example() {
    let numPiccolo = Math.floor(Math.random() * 30);
    let numGrande = Math.floor(Math.random() * (60 - 30)) + 30
    document.getElementById("small").value = numPiccolo;
    document.getElementById("high").value = numGrande;
}
function random() {
    let min = document.getElementById("small").value
    let max = document.getElementById("high").value
    let result = Math.floor(Math.random() * (max - min + 1)) + parseInt(min)
    if(min < 0) {
        document.getElementById("result").innerHTML = "MIN must be > than 0."
    }
    if(max < min) {
        document.getElementById("result").innerHTML = "MAX must be > than MIN."
    }
    else {
    document.getElementById("result").innerHTML = result
    }
}
