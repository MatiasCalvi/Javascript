let alumno={
    nombre:"Frabizio",
    apellido:"Catanzaro",
    edad:20,
    curso:"Mindhub",
    especialidad:"Mern"
}
console.table(alumno);
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.curso);
console.log(alumno.especialidad);

let mascota={
    nombre:"Peter",
    raza:"Bordercoli",
    edad:1.2,
    estatura:"Mediano",
    peso:40
}

console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.raza);
console.log(mascota.edad+" años");
console.log(mascota.estatura);
console.log(mascota.peso);

let frutas=["manzana","pera","anana","kiwi","maracuya"];
console.table(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

let numeros=[15,28,32,2,1];
console.table(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

let familia=[
    {
        nombre:"lucas",
        edad:10
    },
    {
        nombre:"Darian",
        edad:21
    },
    {
        nombre:"Gonza",
        edad:24
    },
    {
        nombre:"Almendra",
        edad:20
    },
    {
        nombre:"Diego",
        edad:23
    }
]
console.table(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

let textoAleatorio=familia[4].nombre+" come "+numeros[3]+" "+frutas[2]+"s";
console.log(textoAleatorio);

