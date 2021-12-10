function addValue(position){
  if(position.id == "first") {
    var number = document.getElementById("first");
  } else {
    var number = document.getElementById("second");
  }
  number.innerHTML = parseInt(number.innerHTML) + 1;
  doCalculation();
}

function minusValue(position){
    //var number = document.getElementById(position);
    if(position.id == "first") {
    var number = document.getElementById("first");
    } else {
    var number = document.getElementById("second");
    }
    number.innerHTML = parseInt(number.innerHTML) - 1;
    doCalculation();
}

function doCalculation(){
  var number1 = document.getElementById("first");
  var number2 = document.getElementById("second");
  var answer = document.getElementById("answer");

  answer.innerHTML = parseInt(number1.innerHTML)+parseInt(number2.innerHTML);
}