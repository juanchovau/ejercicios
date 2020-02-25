/*let i= 0;
let x = [];
let m = 0;
do{
m = parseInt( prompt("Enter a number"))

x[i] = m;
i++;

}
while( isNaN(m) === false);

x.pop();
alert(x); */

/*let number = null;
let pares = [];
let inpares = [];
let strings = [];
while(number !== 0){

  number = parseInt(prompt("ingrese dato"));

if( number % 2 === 0){

  pares.push(number);

}
if(number % 2 === 1){

  inpares.push(number);
}
if(isNaN(number)){

  strings.push(number);
}

}

alert(`${pares}, ${inpares}, ${strings}`);*/

/* completar

class User {
  constructor(nombre, apellido, email, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
  }
  esMayorDeEdad = function() {
    
      return this.edad >= 18;
    }
  }


let usuario1 = new User(prompt("Ingrese nombre"),prompt("Ingrese apellido"), prompt("Ingrese email"),parseInt(prompt("ingrese edad")));



if(usuario1.esMayorDeEdad){

  alert("es mayor");
  
  }
  else{
    alert("es menor")
  }

  */
/*
  class Perro{

    constructor(raza, nombre, peso, edad){

      this.raza = raza;
      this.nombre = nombre;
      this.peso = peso;
      this.edad = edad;
    }
  }

  

   while( perro[0] !== "stop"){
   let perro = new Perro (prompt("raza"), prompt("nombre"), prompt("peso"), prompt("edad"));

  Perro.push(perro);

}
console.log(Perro); */

/*let opt = "";

class Usuario {
  constructor(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }


}
let listaDeUsuarios = [];


function mostrarMenu(){
  opt = prompt('ingrese una opcion \n \n 1.Usuarios \n 2. Productos \n 3. Pedidos \n 4. Salir');
  mostrarSubMenu(opt);
}
function ingresarUsuario(){
 let  opt2 = [prompt("ingrese nombre"), prompt("ingrese apellido"), prompt("ingrese email")]
 //let nuevoUsuario = new Usuario(opt2[0],opt2[1],opt2[2]);
 listaDeUsuarios.push(opt2);
}
function imprimirListaUsuarios(){
  alert(listaDeUsuarios);
  mostrarMenu();
}

mostrarMenu();

function mostrarSubMenu(){
  while(opt !== "4"){
   
    if(opt === "1"){
      
     let obj1 = prompt('a.Ingresar usuario \n b. Mostrar lista');
     if( obj1 === "a"){
       ingresarUsuario();
     }
     if( obj1 === "b"){
       imprimirListaUsuarios();
     }

    }
    if(opt === "2"){
  
      let obj1 = prompt('a.Ingresar producto \n b. Mostrar lista');
      if( obj1 === "a"){
        ingresarUsuario();
      }
      if( obj1 === "b"){
        imprimirListaUsuarios();
      }
    }
    if(opt === "3"){
  
      let obj1 = prompt('a.Ingresar pedido \n b. Mostrar lista');
      if( obj1 === "a"){
        ingresarUsuario();
      }
      if( obj1 === "b"){
        imprimirListaUsuarios();
      }
    }
    if(opt !== "3" && opt !== "2" && opt !== "1"){
  
      alert("Incorrecto");
      mostrarMenu();
    }
  }
  }
*/

/*
Promise.race ([

new Promise ((resolve) => {setTimeout(resolve, (Math.random() * 1000 ), 1)}),
new Promise ((resolve) => {setTimeout(resolve, (Math.random() * 1000 ), 2 )})

]).then(console.log)*/

/*
async function callMe() {
 
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuario = await resp.json();
  for( let usuario of usuarios ){

    console.log(usuario.username);
  }
  
} 
callMe();
*/

 persona = new Object();

 persona.nombre = prompt("Nombre");
 persona.apellido = prompt("Apellido");
 persona.nacimiento = prompt("Fecha de nacimiento (dd/mm/yyyy");

 let personaJson = JSON.stringify(persona);

 console.log(personaJson)

 
