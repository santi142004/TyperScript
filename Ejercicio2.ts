const arreglo: number[] = [1, 45, 72, 88];

const mostrarPares = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (arreglo.length > 0) {
      const elementosPares = arreglo.filter(num => num % 2 === 0);
      resolve("Numeros pares del arreglo:"+ elementosPares);
    } else {
      reject(new Error("Este arreglo no contiene números"));
    }
  }, 4000);
});

mostrarPares
  .then((mensaje) =>{
    console.log(mensaje);
  } )
  .catch((err) => {
    console.log(err.message);
  })


  //Hecho por Santiago Barrera y Sebastian Parada ADSO 2560321_2