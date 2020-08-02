// Two options to choose
successHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
failedHex = '#' + Math.floor(Math.random() * 16777215).toString(16);

// generate the correct color
document.getElementById("game").innerHTML = successHex;

let successColor = Math.floor(Math.random() * 2);
if (successColor === 1 ) {
    document.getElementById("first").style.backgroundColor = successHex;
    document.getElementById("second").style.backgroundColor = failedHex;

    //addEventListener
    document.getElementById("first").addEventListener("click", function() {alert("Correct")});
    document.getElementById("second").addEventListener("click", function() {alert("Incorrect")});
} else {
    document.getElementById("second").style.backgroundColor = successHex;
    document.getElementById("first").style.backgroundColor = failedHex;

    //addEventListener
    document.getElementById("second").addEventListener("click", function() {alert("Correct")});
    document.getElementById("first").addEventListener("click", function() {alert("Incorrect")});
}


//  Using for Time out
function timedRefresh(time) {
    setTimeout(() => {
      location.reload(true);
    }, time)
  }
  (() => {
    timedRefresh(2500);
    setTimeout(() => {
      document.getElementsByTagName("body")
    }, 50)
  })();