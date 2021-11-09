let quantidadeCartas = 0;

function QuantCartas(){
    quantidadeCartas = parseInt(prompt("Escolha a quantidade de cartas"));
    
    if(quantidadeCartas < 3 || quantidadeCartas > 15 || quantidadeCartas%2 !== 0){
        QuantCartas();
    }

    return quantidadeCartas;
}

function comparador() { 
	return Math.random() - 0.5; 
}

function inicio(){
    const qtCartas = QuantCartas();

    let cartaSelecionada = "";
    const aCarta = [
        'bobrossparrot.gif',
        'explodyparrot.gif',
        'fiestaparrot.gif',
        'metalparrot.gif',
        'revertitparrot.gif',
        'tripletsparrot.gif',
        'unicornparrot.gif'
    ];

    let SortearCartas = aCarta.sort(comparador);
    let cartaAleatoria = [];

    const main = document.querySelector(".cartas");

    for(let i = 0; i < qtCartas/2; i++){
        cartaSelecionada = aCarta[i];
        
        cartaAleatoria.push(cartaSelecionada);
        cartaAleatoria.push(cartaSelecionada);
    }

    cartaAleatoria = cartaAleatoria.sort(comparador);

    main.innerHTML= '';
    for(let i = 0; i < cartaAleatoria.length; i++){
        main.innerHTML +=`
            <div class="passaroVerde" onclick="virarCarta(this,'${cartaAleatoria[i]}')" data-identifier="card">
                <img class="img" src="./img/front.png"  alt="passaro verde" data-identifier="back-face">
                <img class="displayNone" src="./img/${cartaAleatoria[i]}" alt="passaro verde" data-identifier="front-face">
            </div>  
        ` ;
    }
}

inicio();

let primeiraCarta;
let primeiraImagem;

let contador = 0;
let jogadasCertas = 0;

function virarCarta(carta, imagem){
    const primeiroElemento = carta.firstElementChild;
    const segundoElemento = carta.lastElementChild;

    primeiroElemento.classList.add("remove-img");
    segundoElemento.classList.add("add-img");

    contador++;

    if(primeiraCarta === undefined){
        primeiraCarta = carta;
        primeiraImagem = imagem;
        return;
    }

    if(primeiraImagem === imagem){
        primeiraImagem = undefined;
        primeiraCarta = undefined;

        jogadasCertas++;

        if(jogadasCertas === quantidadeCartas/2 ){
           setTimeout(alertaJogoFinalizado, 500)
        }
        return;
    }

    setTimeout(desvirarCarta, 1000, primeiraCarta, carta);

    primeiraImagem = undefined;
    primeiraCarta = undefined;
}

function desvirarCarta(primeiraCarta, segundaCarta){
    let primeiroElemento = primeiraCarta.firstElementChild;
    let segundoElemento = primeiraCarta.lastElementChild;

    primeiroElemento.classList.remove("remove-img");
    segundoElemento.classList.remove("add-img");

    primeiroElemento = segundaCarta.firstElementChild;
    segundoElemento = segundaCarta.lastElementChild;

    primeiroElemento.classList.remove("remove-img");
    segundoElemento.classList.remove("add-img");

}

function alertaJogoFinalizado(){
    alert("Parabéns! Você finalizou o jogo em: " + contador + " jogadas")

    return;
}



