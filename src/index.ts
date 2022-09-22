/* ===== Código de TypeScript ===== */

//Parametros tipo number y salida tipo number
function sumar(a: number, b: number): number {
    return (a + b);
}
//1º tipo obligatorios, 2º opcionales, 3º por defecto
function multiplicar(numero: number, otroNum?: number, base: number = 2):number {
    return numero * base;
}
//Aquí me saldría error en la primera al ser false
/* const resultado = sumar('Tutu', ' Tafur'); */
const resultado = sumar(40, 1); 
const resultado2 = multiplicar(40, 0, 5); 
console.log(resultado);
console.log(resultado2);

//En funcion de flecha
const sumarFlecha = (a: number, b: number): number =>{
    return a + b;
}
