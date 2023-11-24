let listaNumerosSorteados = [];
let intervaloMaior = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
mensagemInicial();

function mensagemInicial(){
    exibirTexto("h1", "Jogo do numero secreto");
    exibirTexto("p", `Escolha um número de 1 a ${intervaloMaior}`)
}


function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female", {rate:1.3});
}

function verificarChute(){
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTexto("h1", "Acertou!");
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTexto("p", `Você descobriu o numero secreto em ${tentativas} ${palavraTentativas}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }
    else{
        if (numeroSecreto < chute){
            exibirTexto("p", "O número Secreto é menor");
        }
        else{
            exibirTexto("p", "O número Secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function iniciarNovoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicial();
    limparCampo();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random()*intervaloMaior + 1);
    let quantidadeDeElementos = intervaloMaior;
    let tamanho = listaNumerosSorteados.length;
    if (quantidadeDeElementos == tamanho){
        listaNumerosSorteados = [];
    }

    return numeroSorteado;

    if (listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    }
    else{
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}


// function gerarNumeroAleatorio(){
//     let numeroSorteado = parseInt(Math.random()*intervaloMaior + 1);
//     while (listaNumerosSorteados.includes(numeroSorteado)) {
//         numeroSorteado = parseInt(Math.random()*intervaloMaior + 1);
//     }
//     listaNumerosSorteados.push(numeroSorteado);
//     return numeroSorteado;
// }