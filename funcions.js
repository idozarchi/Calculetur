
function clearAll() {
    document.getElementById("calc-box").innerHTML="0";
  }

function acions(number) {
    let content = document.getElementById("calc-box").innerHTML
    let outcome = 1;
    let todo = content.match(/[^a-z\d]+/gi).join("");
    let sign = "";
    let bool = false;

    if(todo.length > 1){
        bool = true;
        todo = todo[1];
        content = content.split("");
        sign = content.shift();
        content = content.join("");
    }  
    content = content.split(todo);
    if(bool === true){
        content[0] = sign + content[0]; 
    }

    if(todo == "+"){
        outcome = parseInt(content[0]) + parseInt(content[1]);
    }  
    else if(todo == "-"){
        outcome = parseInt(content[0]) - parseInt(content[1]);
    }
    else if(todo == "*"){
        outcome = parseInt(content[0]) * parseInt(content[1]);
    }
    else if(todo == "÷"){
        outcome = parseInt(content[0]) / parseInt(content[1]);
    }
    else if(todo == "%"){
        outcome = parseInt(content[1] / 100);
        outcome = outcome * parseInt(content[0]);
    }
    else if(todo == "±"){
        outcome = parseInt(content[0]) * -parseInt(content[1]);
    }
    return outcome;
}

function checkTodo(){
    let content = document.getElementById("calc-box").innerHTML
    const numbers = content.match(/\d+/g).join("");
    let todo;
    if(content === numbers){
        return false;
    } 
    else {
        todo = content.match(/[^a-z\d]+/gi).join("");
        if(content[0] === "-" && todo === "-"){
            return false;
        }
        else{
            return true;
        }
    }
}

function pressNumber(number) {
    let a = document.getElementById("calc-box").innerHTML;
    const b = a.match(/\d+/g).join("");
    if(a != "0"){
        document.getElementById("calc-box").innerHTML+=number;
    }

    else {
        
        document.getElementById("calc-box").innerHTML=number;
    }
}

function sign(integreter){
    bool = checkTodo();
    if(bool === true){
        document.getElementsByClassName("calc-box")[0].innerHTML =acions() + integreter;
    }
    else{
        document.getElementsByClassName("calc-box")[0].innerHTML+=integreter;
    }
}

    
function one() {
    pressNumber("1");
}

function two() {
    pressNumber("2");
}

function three() {
    pressNumber("3");
}

function four() {
    pressNumber("4");
}

function five() {
    pressNumber("5");
}

function six() {
    pressNumber("6");
}

function seven() {
    pressNumber("7");
}

function eight() {
    pressNumber("8");
}

function nine() {
    pressNumber("9");
}

function zero() {
    pressNumber("0");
}

function eqwel() {
    document.getElementsByClassName("calc-box")[0].innerHTML =acions();
}

function plus() {
    sign("+");
}

function minus() {
    sign("-");
}

function multiplication() {
    sign("*");
}

function divide() {
    sign("÷");
}

function percent() {
    sign("%");
}

function negpos() {
    sign("±");
}
