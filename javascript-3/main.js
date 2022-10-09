//1

/* let num=4,producto=1;
for(let i=0 ; i<=10; i++){
    producto=i*num;
    console.log(producto);
}
 */
/* //2

console.log("----------------------------");
let numeroIngresado;
let acumulador = 0;

for(i=0; numeroIngresado != 0;i++){
    numeroIngresado = parseFloat(prompt("Ingrese numero diferente de 0 (El numero 0 detiene el programa)"))
    acumulador += numeroIngresado
}
alert("El numero acumulado es: " + acumulador);

let numeroIngresado;
let acumulador = 0;
let i=0;
while(numeroIngresado != 0){
    numeroIngresado = Number(prompt("Ingrese numero diferente de 0 (El numero 0 detiene el programa)"))
    acumulador += numeroIngresado
    i++
}
alert("El numero acumulado es: " + acumulador);
*/
//3
/* let numAleatorio=parseInt(Math.random()*100),j=0;
let numeroIngresado2;
console.log(numAleatorio)
while(numeroIngresado2!==numAleatorio){
    numeroIngresado2=Number(prompt());
    if(numeroIngresado2===numAleatorio){
        console.log(`felicitaciones! sus numeros de intento fueron ${j+1}`)
        break
    }
    else if(numeroIngresado2<numAleatorio){
        console.log("el numero ingresado es menor, intente nuevamente")
    }
    else if(numeroIngresado2>numAleatorio){
        console.log("el numero ingresado es mayor, intente nuevamente")
    }
    j++
} */
 
/* //4
let num=prompt("ingrese un numero"),contador=0;
for(let i=1;i<=num;i++){
    if(num%i===0){
        contador+=1
    }
}
if(contador>2){
    alert(`${num} no es primo`)
}
else{
    alert(`${num} es primo`)
}

//5

let num=9;
for(let i=1;i<=num;i++){
    if(num%i===0){
        console.log("es divisible por %d",i)
    }
}

//6

let array=[2,3,76,32,23,12,67,85,45,1];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

//7

let array=[2,3,76,32,23,12,67,85,45,1];
for(let i=0;i<array.length;i++){
    console.log(array[i]+2);
}
*/
//8

/* let personas=[
    {
        nombre: "Nahuel",
        edad: 23,
        altura: 180,
        peso: 74
    },
    {
        nombre: "Maria",
        edad: 19,
        altura: 160,
        peso: 52
    },
    {
        nombre: "Matias",
        edad: 23,
        altura: 188,
        peso: 92
    },
    {
        nombre: "Valentina",
        edad: 21,
        altura: 163,
        peso: 53
    },
    {
        nombre: "Camila",
        edad: 18,
        altura: 172,
        peso: 59
    },
]
for(let i=0;i<personas.length;i++){
    console.log(`hola mi nombre es ${personas[i].nombre} tengo ${personas[i].edad} de edad, tengo una altura de ${personas[i].altura}cm y un peso de ${personas[i].peso} kilos`)
}  */

//9

/* array=[3,5,7,12,6,9]
for(let item of array){
    if(item%2!==0){
        console.log("%d es un numero impar",item);
    }
} */

//10

let array=[12,3,6,4,8,21,23,44,51];
let acumPares=0;
let acumImpares=0;
for(let i=0; i<array.length; i++){
    if(item%2===0){
        acumPares+=array[i];
    }
    else{
        acumImpares+=array[i];
    }
}
console.log(`Pares: ${acumPares} Impares: ${acumImpares}`)
