
 function clique(){
   
   var valor = document.querySelector('input.escolha').value;

   switch (valor){
        case valor = 'Capitão américa': window.location.href = 'Capitão.html';
        break
        case valor = 'Soldado invernal': window.location.href = 'invernal.html';
        break
        case valor = 'Caveira vermelha': window.location.href = 'caveira.html';
        break
        case valor = 'Agente americano': window.location.href = 'agente.html';
        break
        case valor = 'Isaiah Bredley': window.location.href = 'bredley.html';
        break
        case valor = 'Guardião vermelho': window.location.href = 'guardiaored.html';
        break
        default: window.location.href = 'error.html';
        break
   }
 }
  

