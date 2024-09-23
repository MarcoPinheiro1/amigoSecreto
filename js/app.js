let amigo = document.getElementById('nome-amigo');
let listaAmigos = document.getElementById('lista-amigos');
let sorteio = document.getElementById('lista-sorteio');
let amigos = [];

function adicionar() {

    if(amigo.value == ''){
        alert('Digite um nome válido')

        return;
    }
    let nomeAmigo = amigo.value.trim().toLowerCase();

    let nomeExistente = amigos.some(a => a.toLowerCase() === nomeAmigo);

    if (nomeExistente) {
        alert('O nome já está na lista!');
        return;
    }

    amigos.push(amigo.value);

    if (listaAmigos.textContent == ''){
        
        listaAmigos.textContent = amigo.value;

    }else{
        listaAmigos.textContent = listaAmigos.textContent + ' , ' + amigo.value;
        
    }
    amigo.value = '';
    
    
    
}

function sortear() {
    embaralhar(amigos);
    if(amigos.length <= 3){
        alert('A quantidade de amigos não é suficiente para o sorteio!');
        return;
    }else{
        for (let i = 0 ; i < amigos.length ; i++) {
            if (i == amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' + amigos[0] + '<br/>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' + amigos[i + 1] + '<br/>';
            }   
        }
    }
    
    
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigo.value = '';
    listaAmigos.textContent = '';
    sorteio.innerHTML = '';
    amigos = [];
}