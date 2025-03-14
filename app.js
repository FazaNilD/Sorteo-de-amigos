// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
let verificar = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

function agregarAmigo(){
    let listar = document.getElementById("amigo"); 
    let nombre = listar.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
    if (!verificar.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    listar.value = "";

    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); 
        item.textContent = amigos[i]; 
        lista.appendChild(item); 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nigun amigo en la lista, por favor agreguelos");
        return;
    }
    let sorteo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[sorteo];

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

