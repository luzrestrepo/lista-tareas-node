const readlineSync = require("readline-sync");

// arreglo de tareas que almacena las tareas
const tareas = [
  { id: 1, nombre: "llevar a violetta al jardin ", completado: false },
  { id: 2, nombre: "comprar las loncheras ", completado: false },
  { id: 3, nombre: "comprar frutas y verduras ", completado: false },
];
//muestra las tareas existentes
console.table(tareas);

function agregar() {
  let nombreTarea = readlineSync.question("Agrega una tarea:");
  let existe = ""; //para verificar si la tarea ya existe
  for (let i = 0; i < tareas.length; i++) {
    if (nombreTarea == tareas[i].nombre) {
      //En cada iteración, se verifica si el nombre de la tarea proporcionada por el usuario (nombreTarea) es igual al nombre de una tarea existente en el arreglo.
      existe = "si";
      break;
    } else {
      existe = "no";
    }
  }
  if (existe == "si") {
    console.log("Tarea ya existe");
  } else {
    let ultimaTarea = tareas.length - 1;
    //Se calcula el ID de la nueva tarea tomando el ID de la última tarea en el arreglo y sumándole 1.
    let idTarea = tareas[ultimaTarea].id + 1;
    let tarea = { id: idTarea, nombre: nombreTarea, completado: false };
    tareas.push(tarea);
    console.log("Se agregó la tarea");
  }

  console.table(tareas);
}

function borrar() {
  let tareaNumber = readlineSync.question("Borrar tarea numero:");
  let existe = "";
  let index = "";
  for (let i = 0; i < tareas.length; i++) {
    if (tareaNumber == tareas[i].id) {
      existe = "si";
      index = i;
      break;
    } else {
      existe = "no";
    }
  }
  if (existe == "no") {
    console.log("Tarea no existe");
  } else {
    tareas.splice(index, 1); //elimina el indice de la tarea encontrada y la cantidad de elementos que va a eliminar
    console.log("Se borró la tarea");
  }
  console.table(tareas);
}

function completar() {
  let tareaNumber = readlineSync.question("Que tarea desea completar:");
  let existe = "";
  let index = "";
  for (let i = 0; i < tareas.length; i++) {
    if (tareaNumber == tareas[i].id) {
      existe = "si";
      index = i;
      break;
    } else {
      existe = "no";
    }
  }
  if (existe == "no") {
    console.log("Tarea no existe");
  } else {
    let value = true;
    tareas[index].completado = value;
    console.log("Tarea completada");
  }
  console.table(tareas);
}

let funcionar = true;
while (funcionar == true) {
  let hacer = readlineSync.question(
    "Que funcion desea ejecutar: \n1. Agregar \n2. Borrar \n3. Completar \n4. Salir"
  );
  if (hacer == 1) {
    agregar();
  } else if (hacer == 2) {
    borrar();
  } else if (hacer == 3) {
    completar();
  } else if (hacer == 4) {
    funcionar = false;
  } else {
    console.log("Opcion no valida");
  }
}

console.log("Ha terminado la ejecucion");
