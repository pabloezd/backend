class Usuario{
    constructor (nombre, apellido, libros, mascotas){
            this.nombre=nombre
            this.apellido=apellido
            this.libros=libros
            this.mascotas=mascotas
    }
    getFullname (){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre,autor){
        this.libros.push({nombre:nombre, autor:autor})
    }
    getBooksNames(){
        return this.libros.map(e=>e.nombre)
    }
}

const usuario1= new Usuario ("Juan", "Perez", [{nombre:"The Lord of the Rings", autor:"J.R.R. Tolkien"}], ["Perro","Loro"])

console.log(usuario1.getFullname());
usuario1.addMascota("Canario");
console.log(usuario1.mascotas);
console.log(usuario1.countMascotas());
usuario1.addBook("Harry Potter","J.K. Rowling");
console.log(usuario1.libros);
console.log(usuario1.getBooksNames());