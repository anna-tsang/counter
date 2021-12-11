function doAdd(position){
    var number = document.getElementById(position.id).innerHTML;
    document.getElementById(position.id).innerHTML = ++number;
    doCalculation();
}

function doMinus(position){
    var number = document.getElementById(position.id).innerHTML;
    document.getElementById(position.id).innerHTML = --number;
    doCalculation();
}

function doCalculation(){
    var number1 = document.getElementById("first").innerHTML;
    var number2 = document.getElementById("second").innerHTML;
    var answer = document.getElementById("answer").innerHTML;
    answer = parseInt(number1) + parseInt(number2);
    document.getElementById("answer").innerHTML = answer;
}