function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = document.getElementById("qtd").value;
    let quantidade_pista = document.getElementById("qtd-pista").textContent;
    let quantidade_superior = document.getElementById("qtd-superior").textContent;
    let quantidade_inferior = document.getElementById("qtd-inferior").textContent;

    console.log(quantidade_inferior,quantidade_superior);
    
    switch (tipoIngresso) {
        case "inferior":
            retirandoIngressos(tipoIngresso,quantidade,quantidade_inferior);
            break;
        case "superior":
            retirandoIngressos(tipoIngresso,quantidade,quantidade_superior);
            break;
        case "pista":
            retirandoIngressos(tipoIngresso,quantidade,quantidade_pista);
            break;
    }
}

function retirandoIngressos(tipo,quantidade,quantidade_tipo){
    let restante = quantidade_tipo - quantidade; 
    if (restante<0) {
        alert("Você não pode comprar mais ingressos que o disponivel!!!!!!!!!!");
    }
    else{
        document.getElementById(`qtd-${tipo}`).textContent = restante;
        alert("Compra Realizada com sucesso")
    }
}