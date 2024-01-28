function abrirFase(fase){
    
    container = document.getElementById('ctn');
    container.style.display = "none";
    h3voltar = document.getElementById('voltar');
    h3voltar.style.display = "block";

    switch (fase) {
        case 1:
        // let fase1 = document.getElementById('fases');
        // fase1.style.display = "block"; 
        location.replace("game.html", "_self");
        
            break;
        case 2:
        
        default:
            break;
    }




    return 0;
}

function voltar(){
    container = document.getElementById('ctn');
    container.style.display = "flex";

    h3voltar = document.getElementById('voltar');
    h3voltar.style.display = "none";

}