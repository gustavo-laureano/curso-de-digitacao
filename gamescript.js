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


function verifica(inputValue,textoFase){
         var pontos = 0;
            let resultadoHtml = "";

            for (let i = 0; i < inputValue.length || i < textoFase.length; i++) {
                const charInput = inputValue[i] || ""; // Se chegou ao fim do input, use uma string vazia
                const charArray = textoFase[i] || ""; // Se chegou ao fim do array, use uma string vazia
                

                 if (charInput !== charArray) {
                    resultadoHtml += `<span class="highlight">${charInput}</span>`;


                } else {
                    resultadoHtml += charInput;
                    pontos++;
                }
                document.getElementById("pontos").innerHTML = pontos;
            }
        
            document.getElementById("typing").innerHTML = resultadoHtml;

        }
        

function read() {
    var input;
    input = document.getElementById('input-area');
    let inputArray = (input.value).split("");
	verifica(inputArray,fase1licao1);
    
 }


function game(tempo, acertosMinimos, arrayFase){
    return 0;

}


let timer;
let seconds = 0;
let minutes = 0;

// Função para formatar o tempo exibido (adicionando zero à esquerda, se necessário)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Função para atualizar o cronômetro
function updateCronometro() {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  const display = document.getElementById('timer');
  display.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Função para iniciar o cronômetro
function startCronometro() {
  timer = setInterval(updateCronometro, 1000); // Atualiza a cada segundo
}

// Função para parar o cronômetro
function stopCronometro() {
  clearInterval(timer);
}

// Função para reiniciar o cronômetro
function resetCronometro() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  const display = document.getElementById('timer');
  display.textContent = '00:00';
}

function resetGame(){
  resetCronometro();
  input = document.getElementById('input-area');
  input.value = '';
  document.getElementById("typing").innerHTML = '';
  document.getElementById("pontos").innerHTML = '0';
 

}
