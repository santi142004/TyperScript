"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const promesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 10);
            if (numero < 6) {
                resolve("OK  el numero es:" + numero);
            }
            else {
                reject("- , el numero es: " + numero);
            }
        }, 3000);
    });
};
function solucion() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resultado = yield promesa();
            console.log(resultado);
        }
        catch (error) {
            console.log(error);
        }
    });
}
solucion();
//Hecho por Santiago Barrera y Sebastian Parada ADSO 2560321_2
