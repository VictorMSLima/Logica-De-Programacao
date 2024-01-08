//tetste
let listaAmigos = [];

function adicionar(){
    let nome = document.getElementById("nome-amigo").value;
    let lista = document.getElementById("lista-amigos").textContent;
    listaAmigos.push(nome);
    if (lista == "") {
        document.getElementById("lista-amigos").textContent = lista + `${nome}`;    
    }
    else {
        document.getElementById("lista-amigos").textContent = lista + `, ${nome}`;
    }
    document.getElementById("nome-amigo").value = "";
    console.log(listaAmigos)

}

function sortear(){
    embaralhar(listaAmigos)
    let sorteio = document.getElementById("lista-sorteio");
    for(let i = 0; i< listaAmigos.length; i++){
        if (i+1 == listaAmigos.length){
            sorteio.innerHTML =sorteio.innerHTML +  listaAmigos[i] + '--->' + listaAmigos[0] + "<br>";
        }
        else{
            sorteio.innerHTML =sorteio.innerHTML +  listaAmigos[i] + '--->' + listaAmigos[i+1] + "<br>";
        }
    }

}

function reiniciar(){


}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
