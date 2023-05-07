
function clearAll() {
    document.getElementsByClassName("calc-box")[0].innerHTML="0";
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
    
function one() {
const a = document.getElementById("calc-box").innerHTML;
const b = a.match(/\d+/g).join("");
if(a != "0"){
    document.getElementsByClassName("calc-box")[0].innerHTML+="1";
}

else {
    document.getElementsByClassName("calc-box")[0].innerHTML="1";
}
}

function two() {
const a = document.getElementById("calc-box").innerHTML;
const b = a.match(/\d+/g).join("");
if(a != "0"){
    document.getElementsByClassName("calc-box")[0].innerHTML+="2";
}

else {
    document.getElementsByClassName("calc-box")[0].innerHTML="2";
}
}

function three() {
const a = document.getElementById("calc-box").innerHTML;
const b = a.match(/\d+/g).join("");
if(a != "0"){
    document.getElementsByClassName("calc-box")[0].innerHTML+="3";
}

else {
    document.getElementsByClassName("calc-box")[0].innerHTML="3";
}
}

function four() {
const a = document.getElementById("calc-box").innerHTML;
const b = a.match(/\d+/g).join("");
if(a != "0"){
    document.getElementsByClassName("calc-box")[0].innerHTML+="4";
}

else {
    document.getElementsByClassName("calc-box")[0].innerHTML="4";
}
}

function five() {
const a = document.getElementById("calc-box").innerHTML;
const b = a.match(/\d+/g).join("");
if(a != "0"){
    document.getElementsByClassName("calc-box")[0].innerHTML+="5";
}

else {
    document.getElementsByClassName("calc-box")[0].innerHTML="5";
}
}

function six() {
const a = document.getElementById("calc-box").innerHTML;
const b = a.match(/\d+/g).join("");
if(a != "0"){
    document.getElementsByClassName("calc-box")[0].innerHTML+="6";
}

else {
    document.getElementsByClassName("calc-box")[0].innerHTML="6";
}
}

function seven() {
    const a = document.getElementById("calc-box").innerHTML;
    const b = a.match(/\d+/g).join("");
    if(a != "0"){
        document.getElementsByClassName("calc-box")[0].innerHTML+="7";
    }

    else {
        document.getElementsByClassName("calc-box")[0].innerHTML="7";
    }
}

function eight() {
    const a = document.getElementById("calc-box").innerHTML;
    const b = a.match(/\d+/g).join("");
    if(a != "0"){
        document.getElementsByClassName("calc-box")[0].innerHTML+="8";
    }

    else {
        document.getElementsByClassName("calc-box")[0].innerHTML="8";
    }
}

function nine() {
    const a = document.getElementById("calc-box").innerHTML;
    const b = a.match(/\d+/g).join("");
    if(a != "0"){
        document.getElementsByClassName("calc-box")[0].innerHTML+="9";
    }

    else {
        document.getElementsByClassName("calc-box")[0].innerHTML="9";
    }
}

function zero() {
    const a = document.getElementById("calc-box").innerHTML;
    const b = a.match(/\d+/g).join("");
    if(a != "0"){
        document.getElementsByClassName("calc-box")[0].innerHTML+="0";
    }

    else {
        document.getElementsByClassName("calc-box")[0].innerHTML="0";
    }
}

function plus() {
    
    bool = checkTodo();
    if(bool === true){
        document.getElementsByClassName("calc-box")[0].innerHTML =acions() + "+";
    }
    else{
        document.getElementsByClassName("calc-box")[0].innerHTML+="+";
    }
}

function minus() {
    bool = checkTodo();
    if(bool === true){
        document.getElementsByClassName("calc-box")[0].innerHTML =acions() + "-";
    }
    else{
        document.getElementsByClassName("calc-box")[0].innerHTML+="-";
    }
}

function eqwel() {
    document.getElementsByClassName("calc-box")[0].innerHTML =acions();
}

function multiplication() {
    bool = checkTodo();
    if(bool === true){
        document.getElementsByClassName("calc-box")[0].innerHTML =acions() + "*";
    }
    else{
        document.getElementsByClassName("calc-box")[0].innerHTML+="*";
    }
}

function divide() {
    bool = checkTodo();
    if(bool === true){
        document.getElementsByClassName("calc-box")[0].innerHTML =acions() + "÷";
    }
    else{
        document.getElementsByClassName("calc-box")[0].innerHTML+="÷";
    }
}

function percent() {
    bool = checkTodo();
    if(bool === true){
        document.getElementsByClassName("calc-box")[0].innerHTML =acions() + "%";
    }
    else{
        document.getElementsByClassName("calc-box")[0].innerHTML+="%";
    }
}

function negpos() {
    bool = checkTodo();
    if(bool === true){
        document.getElementsByClassName("calc-box")[0].innerHTML =acions() + "±";
    }
    else{
        document.getElementsByClassName("calc-box")[0].innerHTML+="±";
    }
}
