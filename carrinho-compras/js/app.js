let valorTotal = 0 ;

limpar()

function adicionar() {
    //recupera valores
    let produtoSelecionado = document.getElementById("produto");
    let nomeProduto =  produtoSelecionado.value.split("-")[0];
    let valor = produtoSelecionado.value.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    //calcula o preço
    let valores = valor *  quantidade
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span>
        </section>`;
    //atualiza o valor total
    let campoTotal = document.getElementById("valor-total");
    valorTotal = valorTotal + valores;
    console.log(valores);
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById("quantidade").value = 0;



}

function limpar() {
    valorTotal = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
    document.getElementById("quantidade").value = 0;

}