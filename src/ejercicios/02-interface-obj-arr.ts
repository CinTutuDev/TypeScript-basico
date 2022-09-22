/* ===== Código de TypeScript ===== */

let habilidades: string [] = ['Bash', 'Counter', 'Healing'];
habilidades.push('Dance');
console.log(habilidades);

//Creo una interface para el objeto y le digo los tipos que van a llevar sus propiedades
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    //propiedad opcional
    puebloNatal?: string;

}
//Así puedo decir que el obj es de tipo Personaje
const personajes: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}
personajes.puebloNatal = 'Paletolandia';
console.log(personajes);
console.table(personajes);