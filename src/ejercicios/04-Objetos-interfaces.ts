interface SuperHeroe {
 nombre: string;
 edad: number;
 direccion: Dir;
 mostrarDir: () => string;
}
//La interface Dir es un dato de la interface SuperHeroe
interface Dir {
 calle: string;
 pais: string;
 ciudad: string;
}

const superHeroe: SuperHeroe = {
 nombre: "Spiderman",
 edad: 30,
 direccion: {
   calle: "Main st",
   pais: "USA",
   ciudad: "NY",
 },
 mostrarDir() {
   return (
     this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais
   );
 },
};

const dir = superHeroe.mostrarDir();
console.log(dir);
