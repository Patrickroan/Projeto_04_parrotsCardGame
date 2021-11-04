let cartas = ['bobrossparrot.gif','explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif'];

function QuantCartas(){
    let quantidadeCartas = parseInt(prompt("Escolha a quantidade de cartas"))
    
    if(quantidadeCartas < 3 || quantidadeCartas > 15 || quantidadeCartas%2 !== 0){
        QuantCartas();
    }

    return quantidadeCartas;
}

function embaralhaCartas(){
    const quantidadeCartas = QuantCartas() / 2

    let contador = 0;
    let cartasUsadas = [];

    while(contador < quantidadeCartas){
        cartasUsadas.push(cartas[contador]);
        cartasUsadas.push(cartas[contador]); 
        contador++;
    }

    cartasUsadas.sort();

    console.log(cartasUsadas);
}
embaralhaCartas()



function virarCarta(carta){

    const primeiroElemento = carta.firstElementChild;
    const ultimoElemento = carta.lastElementChild;

    primeiroElemento.classList.add("remove-img")
    ultimoElemento.classList.add("add-img")

    console.log(primeiroElemento);
    console.log(ultimoElemento);
}

function inicia(){
    document.querySelector(".cartas").addEventListener
}

