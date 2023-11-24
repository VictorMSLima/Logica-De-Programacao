function alterarStatus(id){
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let imagem = jogoSelecionado.querySelector(".dashboard__item__img");
    let botao = jogoSelecionado.querySelector(".dashboard__item__button");
    let nomeJogo = jogoSelecionado.querySelector(".dashboard__item__name");

    console.log(botao);

    if (imagem.classList.contains("dashboard__item__img--rented") ) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.textContent = "Alugar";
        botao.classList.remove("dashboard__item__button--return");
    }
    else{
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent= "Devolver";
        botao.classList.add("dashboard__item__button--return");
    }
}