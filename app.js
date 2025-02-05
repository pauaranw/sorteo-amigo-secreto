// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigo = 0
//let amigoSecreto = generarAmigoSecreto ()



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

/*function generarAmigoSecreto (){
    let amigoSecreto = Math.floor(Math.random ()*10);
    return amigoSecreto;
}*/

function sortearAmigo() {
    let resultadoAmigo = document.getElementById ("listaAmigos").value;
    if (amigos != 0 ){
        let amigoSecreto2 = amigos[ Math.floor(Math.random ()*amigos.length)];
        console.log (amigoSecreto2)
        return amigoSecreto2
        
    }
    
}
/*
function mostrarResultado(){
    let resultadoFinal = document.getElementById ('resultado');
    resultadoFinal.innerHTML = sortearAmigo()
}*/

function mostrarResultado() {
    let resultadoFinal = document.getElementById('resultado');
    
    if (!resultadoFinal) {
        console.error("No se encontró el elemento con id='resultado'");
        return;
    }

    let elementoLi = document.createElement( 'li' );
    elementoLi.innerHTML = sortearAmigo ()
    resultadoFinal.appendChild( elementoLi );
   
}