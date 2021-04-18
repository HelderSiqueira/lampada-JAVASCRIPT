const lampada = document.getElementById('lampada');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');

function verificaQuebra(){
    return lampada.src.indexOf('quebrada') > -1
}

function ligarLampada(){
    if (!verificaQuebra ()){
    lampada.src = './img/ligada.jpg'

    }
}

function desligarLampada(){
    if (!verificaQuebra ()){
    lampada.src = './img/desligada.jpg'
    
    }
}

function quebrarLampada(){
    if (!verificaQuebra ()){
    lampada.src = './img/quebrada.jpg'

    }
}

ligar.addEventListener('click', ligarLampada);
desligar.addEventListener('click', desligarLampada);


lampada.addEventListener('mouseover', ligarLampada);
lampada.addEventListener('mouseleave', desligarLampada);
lampada.addEventListener('dblclick', quebrarLampada);
