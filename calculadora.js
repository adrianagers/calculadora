
// alert('Hola Agers como tas tengo que volver con mas ejercicios de c++'); para alertas 
// console.log("mensaje para la consola del equipo");se muestra mensajes en la consola
// con el DOM se puede hace cosas como si fuera el html

// document.write("calculadora");para remplazar cosas en el html 
// prompt("ingrese su nombre"); para que ingresedatos 

// cracion de variables  diferentes formasa
// let=> para uso local
// // var=> alcance es global 

// var age= 22;
// let edad=15;

// // funciones 
// function sumaNumeros(){
//     // var age='geraldine';
//     // let edad=30;
//     console.log(edad+ege);
// }

// sumaNumeros();

// function sumarEdad(){
//     let edad=prompt("ingresa tu edad");
//     let nuevaEdad=parseInt(edad)+10;
//     alert(nuevaEdad);
// }
// sumarEdad();

// function sumaDosNum(){
//     let num1 = parseInt(prompt("ingresa el primer numero"));
//     let num2 = parseInt(prompt("ingrese el segundo numero"));
//     let respt = num1 + num2;
//     alert("Su resultado es " + respt)
// }
// sumaDosNum();

// function cambiarMensaje(idDIV){
// let nuevaFrse= prompt("escribe lo que desees");
// document.getElementById(idDIV).innerHTML = nuevaFrse;
// }

// innerHTML= div, h, p, button, Li
// pero si queremos modificar el input hacemos ('data').value=numero


// condicionales
// nos permite validar si algo es cierto o no 





// cambiarMensaje();
function pintarNumero(numero) {
  //  document.getElementById('data').value=numero;
  pintarDato(numero);
}

function pintaroperador(operador) {
  // document.getElementById('data').value=operador;
  pintarDato(` ${operador} `);
}

function pintarDato(dato) {
  let valorInput = document.getElementById('data')
  //  valorInput.value = valorInput.value + dato;
  valorInput.value = `${valorInput.value}${dato}`
}

function LimpiarDatos() {
  document.getElementById('data').value = '';
}

function respDatos() {
  let valorInput = document.getElementById('data').value;
  let arreglo = valorInput.split(' ')

  if (arreglo[1] == '+') {
    let suma = parseInt(arreglo[0]) + parseInt(arreglo[2]);
    document.getElementById('data').value = suma;

  } else if (arreglo[1] == '-') {
    let resta = parseInt(arreglo[0]) - parseInt(arreglo[2]);
    document.getElementById('data').value = resta;
  }
  else if (arreglo[1] == '*') {
    let multi = parseInt(arreglo[0]) * parseInt(arreglo[2]);
    document.getElementById('data').value = multi;
  }
  else if(arreglo[1] == '/'){
    let divi = parseInt(arreglo[0]) / parseInt(arreglo[2]);
    document.getElementById('data').value = divi;
  }else {
    swal("Error",'No ingresaste ninguna operacion', 'error')
    }
  // switch(arreglo[1]){
  //   case '+':
  //     let suma = parseInt(arreglo[0]) + parseInt(arreglo[2]);
  //     document.getElementById('data').value = suma;
  //     break
  //   case '-':
  //     let resta = parseInt(arreglo[0]) - parseInt(arreglo[2]);
  //     document.getElementById('data').value = resta;
  //     break
  //   case '*':
  //     let multi = parseInt(arreglo[0]) * parseInt(arreglo[2]);
  //     document.getElementById('data').value = multi;
  //     break
  //   default:
  //     let divi = parseInt(arreglo[0]) / parseInt(arreglo[2]);
  //     document.getElementById('data').value = divi;
  // }
}
function mostraMensaje(){
  let DiaQDeseas= prompt("escribe lo que desees");
  
switch(DiaQDeseas){
  case 'Lunes':
    case 'lunes': 
        case '1': 
        swal(" Exelente dia hoy es lunes",":)","success");
  break
  case 'Martes':
    case 'martes':
      case '2':swal(" Exelente dia hoy es Martes",":)","success");
    break
  case 'Miercoles':
    case 'miercoles':
      case '3':swal(" Exelente dia hoy es Miercoles",":)","success");
    break
    case 'Jueves':
      case 'jueves':
        case '4':swal(" Exelente dia hoy es Jueves",":)","success");
    break
    case 'Viernes':
      case 'viernes':
        case '5':swal(" Exelente dia hoy es viernes",":)","success");
      break
    case 'Sabado':
      case 'sabado':
        case '6':swal(" Exelente dia hoy es Sabado ",":)","success");
      break
      case 'Domingo':
        case 'domingo':
          case '7':swal(" Exelente dia hoy es Domingo",":)","success");
      break
  default:
   swal(" Lo sentimos","lo que haz ingresado no es un dia de la semana ","error");
}
}

let diasAño= prompt("ingrese el numero que desees y te dire el año ");

if(diasAño == 6 ){
  alert("este mes es junio");
}else{
 alert("nuevamente ingrese un numero")
}