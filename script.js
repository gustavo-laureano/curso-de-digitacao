var fase1licao1 = [
    "a",
    "s",
    "d",
    "f",
    " ",
    "a",
    "s",
    "d",
    "f",
    " ",
    "a",
    "s",
    "d",
    "f",
    " ",
    "a",
    "s",
    "d",
    "f",
    " ",
    "a",
    "s",
    "d",
    "f",
    " ",
    "a",
    "s",
    "d",
    "f"
];


function verifica(inputValue,datum){
         
            let resultadoHtml = "";

            for (let i = 0; i < inputValue.length || i < datum.length; i++) {
                const charInput = inputValue[i] || ""; // Se chegou ao fim do input, use uma string vazia
                const charArray = datum[i] || ""; // Se chegou ao fim do array, use uma string vazia
        
                if (charInput !== charArray) {
                    resultadoHtml += `<span class="highlight">${charInput}</span>`;
                } else {
                    resultadoHtml += charInput;
                }
            }
        
            document.getElementById("typing").innerHTML = resultadoHtml;

        }
        

function read() {
    var input;
    input = document.getElementById('input-area');
    let inputArray = (input.value).split("");
    verifica(inputArray,fase1licao1);

 }
 document.addEventListener('DOMContentLoaded', function() {
    // Código a ser executado após o carregamento do DOM
 let myinput = document.getElementById('input-area');
 myinput.addEventListener('paste', function(e) {
    e.preventDefault();
  });

  // Desativar copiar
  myinput.addEventListener('copy', function(e) {
    e.preventDefault();
  });

  // Desativar cortar
  myinput.addEventListener('cut', function(e) {
    e.preventDefault();
  });
  myinput.addEventListener('select', function(e) {
    e.preventDefault();
  });
});



  
