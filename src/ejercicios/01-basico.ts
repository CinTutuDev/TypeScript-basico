/*
    ===== Código de TypeScript =====
    (La documentación oficial está --> https://www.typescriptlang.org/docs/handbook/basic-types.html)

*/
let nombre: string = 'Cinta';
//numero o string
let hp: number | string = 40;
//el 0 ni el 1 van con boolean
let estaVivo: boolean = true;

hp = 'FULL';
nombre = 'Tutu';

console.log(nombre, hp, "¿está vivo?", estaVivo);
