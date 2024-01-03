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