document.getElementById("submit").addEventListener("click", submit);

document.getElementById("answer").addEventListener("click", answer);

document.getElementById("addition").addEventListener("click", add);

document.getElementById("subtraction").addEventListener("click", subtraction);

document
  .getElementById("multiplication")
  .addEventListener("click", multiplication);

document.getElementById("division").addEventListener("click", division);

document.getElementById("next").addEventListener("click", next);

document.getElementById("back").addEventListener("click", back);

document.getElementById("back1").addEventListener("click", back1);
document.getElementById("zero").addEventListener("click", zero);
document.getElementById("one").addEventListener("click", one);
document.getElementById("two").addEventListener("click", two);
document.getElementById("three").addEventListener("click", three);
document.getElementById("four").addEventListener("click", four);
document.getElementById("five").addEventListener("click", five);
document.getElementById("six").addEventListener("click", six);
document.getElementById("seven").addEventListener("click", seven);
document.getElementById("eight").addEventListener("click", eight);
document.getElementById("nine").addEventListener("click", nine);

function submit() {
  let names = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  //this code targets girls older than 3yr
  if (age > 3 && names != "" && document.getElementById("girly").checked) {
    document.getElementById("welcome").innerText = `Welcome ${names}`;
    document.getElementById("div-1").style.display = "none";
    document.getElementById("div-2").style.display = "block";
    document.body.style.backgroundColor = "pink";
    document.getElementById("div-2").style.backgroundColor = "#ad1457ba";
    document.getElementById("num").style.backgroundColor = "#ad1457ba";
    document.getElementById("welcome").style.color = "#ad1457ba";
  } //this one is for the boys
  else if (
    age > 3 &&
    names != "" &&
    document.getElementById("boyish").checked
  ) {
    document.getElementById("welcome").innerText = `Welcome ${names}`;
    document.getElementById("div-1").style.display = "none";
    document.getElementById("div-2").style.display = "block";
    document.body.style.backgroundColor = "#30585891";
    document.getElementById("div-2").style.backgroundColor = "#00695c";
    document.getElementById("num").style.backgroundColor = "#00695c";
    document.getElementById("welcome").style.color = "rgba(0,105,92,1";
  } else if (
    age <= 3 &&
    names != "" &&
    age > 0 &&
    document.getElementById("boyish").checked
  ) {
    document.getElementById(
      "welcome"
    ).innerText = `Lets do some counting ${names}`;
    document.getElementById("div-1").style.display = "none";
    document.getElementById("div-3").style.display = "block";
    document.body.style.backgroundColor = "#30585891";
    document.getElementById("div-2").style.backgroundColor = "#00695c";
    document.getElementById("num").style.backgroundColor = "#00695c";
    document.getElementById("welcome").style.color = "rgba(0,105,92,1";
  } else if (
    age <= 3 &&
    names != "" &&
    age > 0 &&
    document.getElementById("girly").checked
  ) {
    document.getElementById(
      "welcome"
    ).innerText = `Lets do some counting ${names}`;
    document.getElementById("div-1").style.display = "none";
    document.getElementById("div-3").style.display = "block";
    document.body.style.backgroundColor = "pink";
    document.getElementById("div-2").style.backgroundColor = "#ad1457ba";
    document.getElementById("num").style.backgroundColor = "#ad1457ba";
    document.getElementById("welcome").style.color = "#ad1457ba";
  } //if age or name are missing an alert message will be shown
  else if (age === "" || names === "") {
    alert("fill all blanks");
    return false;
  } else {
  }
}

function add() {
  document.getElementById("symbol").value = "+";
}

function subtraction() {
  document.getElementById("symbol").value = "-";
}

function multiplication() {
  document.getElementById("symbol").value = "x";
}

function division() {
  document.getElementById("symbol").value = "/";
}

function answer() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (document.getElementById("symbol").value === "+") {
    document.getElementById("answer").innerText = Number(num1) + Number(num2);
  } else if (document.getElementById("symbol").value === "-") {
    document.getElementById("answer").innerText = Number(num1) - Number(num2);
  } else if (document.getElementById("symbol").value === "x") {
    document.getElementById("answer").innerText = Number(num1) * Number(num2);
  } else if (document.getElementById("symbol").value === "/") {
    document.getElementById("answer").innerText = Number(num1) / Number(num2);
  } else {
    alert("enter mathematical operation");
  }
}

function next() {
  let inputValue = document.getElementsByTagName("input");
  for (var i = 0; i < inputValue.length; i++) {
    inputValue[i].value = "";
  }
  document.getElementById("answer").innerText = "answer";
}

function back() {
  document.getElementById("div-1").style.display = "block";
  document.getElementById("div-2").style.display = "none";
}
function back1() {
  document.getElementById("div-1").style.display = "block";
  document.getElementById("div-3").style.display = "none";
}
function zero() {
  document.getElementById("num").innerHTML = 0;
}
function one() {
  document.getElementById("num").innerHTML = 1;
}
function two() {
  document.getElementById("num").innerHTML = 2;
}
function three() {
  document.getElementById("num").innerHTML = 3;
}
function four() {
  document.getElementById("num").innerHTML = 4;
}
function five() {
  document.getElementById("num").innerHTML = 5;
}
function six() {
  document.getElementById("num").innerHTML = 6;
}
function seven() {
  document.getElementById("num").innerHTML = 7;
}
function eight() {
  document.getElementById("num").innerHTML = 8;
}
function nine() {
  document.getElementById("num").innerHTML = 9;
}
