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
    }
}

function copia() {
  var copyText = document.getElementById("result");
  if(copyText == "") {
      return false;
  }

  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(copyText.value);

  alert("Number " + copyText.value + " copied to clipboard!");
}
