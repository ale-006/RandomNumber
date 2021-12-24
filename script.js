function random() {
    let min = document.getElementById("min").value
    let max = document.getElementById("max").value
    let result = Math.floor(Math.random() * (max - min + 1)) + parseInt(min)
    if(min == "" || max == "") {
        document.getElementById("max").style.border = "2px solid red"
        document.getElementById("min").style.border = "2px solid red"
    }
    else if(parseInt(max) < parseInt(min)) {
        document.getElementById("result").innerHTML = min + " is higher than " + max
    }
    else {
        document.getElementById("max").style.border = "none"
        document.getElementById("min").style.border = "none"
        document.getElementById("result").innerHTML = result
        navigator.clipboard.writeText(result);
    }
}
