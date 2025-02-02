// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigo = 0

function agregarAmigo(){
    let ingresarNombre = document.getElementById ('amigo').value;

    if (ingresarNombre == ""){
        alert ("Por favor, ingrese un nombre")
    }else{
        amigos.push(ingresarNombre)
    }
    limpiarCaja()
    recorrerListaAmigos ()
    
    console.log(amigos)
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
   

function recorrerListaAmigos(){
    let lista = document.getElementById ("listaAmigos")
    lista.innerHTML = ""
    
    for (indice = 0; indice < amigos.length; indice = indice + 1) {
        let elementoLi = document.createElement( 'li' );
        elementoLi.innerHTML = amigos [indice]
        lista.appendChild( elementoLi );
    } 
}