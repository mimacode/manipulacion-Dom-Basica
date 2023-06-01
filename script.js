//importar elementos html

console.log('hello mima');
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const button = document.querySelector('#btn-calcular');
const presult = document.querySelector('#result');

button.addEventListener('click', btnOnclick); 

//Escuchar los eventos: click:  agg en html el atributo onclick

function btnOnclick () {
    console.log('Im listening on click');
    const sumaInputs = Number(input1.value) + Number(input2.value);
    presult.innerText = `El resultado es ${sumaInputs}`;
}

//En caso que el código esté dentro de un formulario entonces:
//Esto debido a que en html esta programado coger el ultimo boton del form y asumirlo como submit para enviarlo en la url
/* const form = document.querySelector('#formm');
form.addEventListener('submit', sumarInputValues); 

function sumarInputValues (event) {
    console.log('Im listening on click');
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    presult.innerText = `El resultado es ${sumaInputs}`;
} */
