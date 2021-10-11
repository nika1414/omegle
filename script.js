function New() {
  document.getElementById("newBtn").innerHTML = "Stop";
  document.getElementById("newBtn").style.color = "red";
}

function Send() {
  var written = document.getElementById("written").value;
  var sentchat = document.getElementById("sentChat");
  sentchat.innerHTML = written;

  sentchat.style.color = "black";
  sentchat.style.fontWeight = "lighter";
  var youchat = document.getElementById("youChat");
  youchat.innerHTML = "You:";
  youchat.style.color = "blue";
  youchat.style.fontWeight = "bold";

  if (written === "") {
    youchat.innerHTML = "";
  } else {
    youchat.innerHTML;
  }
}
