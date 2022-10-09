//1

let num1=31
let num2=22
if(num1>num2){
    console.log("%d es mayor a %d ",num1,num2)
}
else{
    console.log("%d es mayor a %d ",num2,num1)
}
//2

num1=12
num1=13
if(num1===num2){
    console.log("%d es igual a %d ",num1,num2)
}
else{
    console.log("%d no es igual a %d ",num1,num2)
}
//3

num1=12
num1=12
if(num1>num2){
    console.log("%d es mayor a %d ",num1,num2)
}
else if(num2>num1){
    console.log("%d es mayor a %d ",num2,num1)
}
else{
    console.log("%d es igual a %d ",num1,num2)
}
//4

num1=31
num2=21
num3=12
if((num1<num2)&&(num1<num3)){
    console.log ("% es menor a %d y es menor a %d",num1,num2,num3)
}
else if((num2<num1)&&(num2<num3)){
    console.log("%d es menor a %d y es menor a %d",num2,num1,num3)
}
else{
    console.log("%d es menor a %d y es menor a %d",num3,num1,num2)
}
//5

/* let persona={
    nombre:"Matias",
    edad:33,
    altura:188
}
let persona1={
    nombre:"Nehuen",
    edad:31,
    altura:172
} */

function Name(nombre,edad,altura){
    this.nombre=nombre,
    this.edad=edad,
    this.altura=altura
}
let persona= new Name("Nehuen",31,174);
console.table(persona)
let persona1= new Name("Fabrizio",22,160);
console.table(persona1)

if(persona.edad>persona1.edad){
    console.log("la persona de mayor edad es "+persona.nombre)
}
else{
    console.log("la persona de mayor edad es "+persona1.nombre)
}
if(persona.altura>persona1.altura){
    console.log("la persona de mayor altura es "+persona.nombre)
}
else{
    console.log("la persona de mayor altura es "+persona1.nombre)
}
//6

function Name2(nombre,edad,altura,vision){
    this.nombre=nombre,
    this.edad=edad,
    this.altura=altura,
    this.vision=vision
}
let yo = new Name2(prompt("ingrese su nombre"),prompt("ingrese su edad"),prompt("ingrese su altura en cm"),prompt("ingrese su tango de vision de 1 hasta 10"));
if((Number(yo.edad)>18)&&(Number(yo.altura)>150)&&(Number(yo.vision)>=8)){
    console.log("puede manejar")
}
else{
    console.log("no puede manejar")
} 
//7

