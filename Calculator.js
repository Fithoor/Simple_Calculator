let number = '';
document.querySelector("#display").value = number;

function empty(){
    number =   '';
          document.querySelector('#display').value = number;
}
function rightBricket(){
    number =  number + '(';
          document.querySelector('#display').value = number;
}
function leftBricket(){
    number =  number +  ')';
          document.querySelector('#display').value = number;
}
function plus(){
    number =  number + '+';
          document.querySelector('#display').value = number;
}
function seven(){
    number =  number + '7';
          document.querySelector('#display').value = number;
}
function eight(){
    number =  number + '8';
          document.querySelector('#display').value = number;
}
function nine(){
    number =  number + '9';
          document.querySelector('#display').value = number;
}
function star(){
    number =  number + '*';
          document.querySelector('#display').value = number;
}
function four(){
    number =  number + '4';
          document.querySelector('#display').value = number;
}
function five(){
    number =  number + '5';
          document.querySelector('#display').value = number;
}
function six(){
    number =  number + '6';
          document.querySelector('#display').value = number;
}
function minus(){
    number =  number + '-';
          document.querySelector('#display').value = number;
}
function one(){
    number =  number + '1';
          document.querySelector('#display').value = number;
}
function two(){
    number =  number + '2';
          document.querySelector('#display').value = number;
}
function three(){
    number =  number + '3';
          document.querySelector('#display').value = number;
}
function divide(){
    number =  number + '/';
          document.querySelector('#display').value = number;
}
function zero(){
    number =  number + '0';
          document.querySelector('#display').value = number;
}
function dot(){
    number =  number + '.';
          document.querySelector('#display').value = number;
}


function equal(){
    let result = eval(number);
          document.querySelector('#display').value = result;
}
