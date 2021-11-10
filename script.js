function example() {
    let numPiccolo = Math.floor(Math.random() * 30);
    let numGrande = Math.floor(Math.random() * (60 - 30)) + 30
    document.getElementById("small").value = numPiccolo;
    document.getElementById("high").value = numGrande;
}
function random() {
    let min = document.getElementById("small").value
    let max = document.getElementById("high").value
    if(min > max) {
        document.getElementByID("result").innerHTML = "Error! Min > Max!"
    }
    let result = Math.floor(Math.random() * (max - min + 1)) + parseInt(min)
    if(isNaN(result)) {
        document.getElementById("result").innerHTML = "Error! These are not numbers."
    }
    else {
    document.getElementById("result").innerHTML = result
    }
}
