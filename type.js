var content = 'UMA FESTA!!!';
var text = document.getElementById('text');

var speed = 200;
var cont = 0;

function typeWriter () {
  if(cont < content.length){
    text.textContent += content.charAt(cont);
    cont++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
