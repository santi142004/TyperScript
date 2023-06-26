const promesa = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random()*10);
      if (numero < 6) {
        resolve("OK  el numero es:"+ numero);
      } else {
        reject("- , el numero es: "+ numero);
      }
    }, 3000);
  });
};

async function solucion() {
  try {
    const resultado = await promesa();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

solucion();


//Hecho por Santiago Barrera y Sebastian Parada ADSO 2560321_2