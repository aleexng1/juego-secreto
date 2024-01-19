
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número entre el 1 y el 10';
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//let imc = 0;
//let factorial = 1;
//console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario===numeroSecreto);
    //console.log(intentos);

    if(numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario> numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor')
        } else {
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Todos los números fueron sorteados');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p','Indica un número entre el 1 y el '+numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();

// function HolaMundo (){
//     console.log("¡Hola, mundo!");
//     return;
// }

// HolaMundo();

// function HolaPersona(nombre){
//     console.log("¡Hola, "+nombre+" !");
// }

// HolaPersona("Alex");

// function Doble(numero){
//     console.log(numero*2);
// }

// Doble(15);

// function promedio(n1,n2,n3){
//     console.log((n1+n2+n3)/3)
// }

// promedio(30,35,59)

// function ElMayor(n1,n2){
//     if(n1>n2) {console.log(n1)} else {console.log(n2)}
// }

// ElMayor(8,5)

// function Cuadrado(n1){
//     console.log(n1*n1)
// }

// Cuadrado(5)

// function Calculaimc(altura,peso){
//     imc = (altura*peso);
//     //return imc;
// }

// Calculaimc(160,60);
// console.log(imc);

// function calculaFactorial(n){
// 	//var factorial = 1; 
// 	for (i=1; i<=n; i++) {
// 		factorial = factorial * i; 
// 	}
// 	//return factorial; 
// }

// calculaFactorial(4);
// console.log(factorial);

// function convierteDolar(dolar){
// pesoBrazil = 4.8*dolar
// }

// convierteDolar(10);
// console.log(pesoBrazil);

// function areaRectangulo(alto,ancho){
//     areaRecta = alto * ancho
// }

// function perimetroRectangulo(alto,ancho){
//     periRect = alto*2 + ancho*2
// }

// areaRectangulo(3,2)
// perimetroRectangulo(3,2)
// console.log("El área del rectangulo es: "+areaRecta+" y el perímetro es: "+periRect)


// function mostrarTablaDeMultiplicar(numero) {
//     for (var i = 1; i <= 10; i++) {
//       var resultado = numero * i;
//       console.log(numero + " x " + i + " = " + resultado);
//     }
//   }
//   // Ejemplo de uso
//   let numero = 7;
//   mostrarTablaDeMultiplicar(numero);


//   // Del Profe

//   function calcularIMC(altura, peso) {
//     var imc = peso / (altura * altura);
//     return imc;
//   }

//   function calcularFactorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     } else {
//       return numero * calcularFactorial(numero - 1);
//     }
//   }
//   // Ejemplo de uso
//   let numero = 5;
//   let resultado = calcularFactorial(numero);
//   console.log(`El factorial de ${numero} es ${resultado}`);
  
//   function convertirDolaresAReales(dolares) {
//     var cotizacionDolar = 4.80;
//     var reales = dolares * cotizacionDolar;
//     return reales;
//   }
//   // Ejemplo de uso
//   let valorEnDolar = 50;
//   let valorEnReales = convertirDolaresAReales(valorEnDolar);
//   console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);
  
//   function calcularAreaYPerimetroRectangular(altura, anchura) {
//     var area = altura * anchura;
//     var perimetro = 2 * (altura + anchura);
//     console.log("Área: " + area);
//     console.log("Perímetro: " + perimetro);
//   }
//   // Ejemplo de uso
//   let altura = 3; // en metros
//   let anchura = 5; // en metros
//   calcularAreaYPerimetroRectangular(altura, anchura);
  

//   function calcularAreaYPerimetroCircular(radio) {
//     var pi = 3.14;
//     var area = pi * radio * radio;
//     var perimetro = 2 * pi * radio;
//     console.log("Área: " + area);
//     console.log("Perímetro: " + perimetro);
//   }
//   // Ejemplo de uso
//   let radio = 4; // en metros
//   calcularAreaYPerimetroCircular(radio);
  
//   function mostrarTablaDeMultiplicar(numero) {
//     for (var i = 1; i <= 10; i++) {
//       var resultado = numero * i;
//       console.log(numero + " x " + i + " = " + resultado);
//     }
//   }
//   // Ejemplo de uso
//   let numero = 7;
//   mostrarTablaDeMultiplicar(numero);
  
// let listaGenerica = [];

// let lenguajesDeProgramacion = ["JavaScript", "C", "C++","Kotlin","Python"];
// //console.log(lenguajesDeProgramacion[3]);

// lenguajesDeProgramacion.push("Java");
// lenguajesDeProgramacion.push("Ruby");
// lenguajesDeProgramacion.push("GoLang");

// function muestraElementos(lista){
//    // let lista = [];
    
//     for(let i = 0; i<lista.length; i++){
//          console.log(lista[i]);
//     }

    
// }

// muestraElementos(lenguajesDeProgramacion);

// // del profe

// let listaGenerica = [];

// let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// function mostrarLenguagesSeparadamente() {
//     for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
//       console.log(lenguagesDeProgramacion[i]);
//     }
//   }
  
//   mostrarLenguagesSeparadamente();

//   function mostrarLenguagesReversoSeparadamente() {
//     for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
//       console.log(lenguagesDeProgramacion[i]);
//     }
//   }
  
//   mostrarLenguagesReversoSeparadamente();

//   function calcularMedia(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//       suma += lista[i];
//     }
//     return suma / lista.length;
//   }
  
//   let numeros = [10, 20, 30, 40, 50];
//   let media = calcularMedia(numeros);
//   console.log('Média:', media);

//   function encontrarMayorMenor(lista) {
//     let mayor = lista[0];
//     let menor = lista[0];
  
//     for (let i = 1; i < lista.length; i++) {
//       if (lista[i] > mayor) {
//         mayor = lista[i];
//       }
//       if (lista[i] < menor) {
//         menor = lista[i];
//       }
//     }
  
//     console.log('Mayor:', mayor);
//     console.log('Menor:', menor);
//   }
  
//   let numeros = [15, 8, 25, 5, 12];
//   encontrarMayorMenor(numeros);

//   function calcularSuma(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//       suma += lista[i];
//     }
//     return suma;
//   }
  
//   let numeros = [15, 8, 25, 5, 12];
//   let suma = calcularSuma(numeros);
//   console.log('Suma:', suma);

//   function encontrarIndiceElemento(lista, elemento) {
//     for (let i = 0; i < lista.length; i++) {
//       if (lista[i] === elemento) {
//         return i; // Retorna el índice del elemento encontrado
//       }
//     }
//     return -1; // Retorna -1 si el elemento no se encuentra en la lista
//   }