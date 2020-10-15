//Declaramos un array para poder ejecutar los métodos.
const array = [1, 2, 3, 4, 5, 6];
//const array2 = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
//forEach
//Declaramos la función myEach que lo que va a hacer es recoorer cada unos de los elementos y retornar cada elemento del array.
/* function myEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
const resultMyEach = myEach(array, elemento => console.log(elemento)); */
//Filter
/* function myFilter(array, callback){
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])===true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const resultMyFilter = myFilter(array, (elemento) => elemento > 5);
console.log(resultMyFilter); */
//Find
/* function myfind(array, callback){
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i]) === true)
        return array[i]
    }
}

const result2 = myfind(array2, (elemento) => elemento ==='tres')
console.log(result2); */
//
//findIndex
/* function myFindIndex(array, callback){
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])===true){
            return i
        }
    }
}
const resultIndex = myFindIndex(array2, (elemento) => elemento === 'dos' )
console.log(resultIndex); */
//Map
/* function myMap(array, callback) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray;
}
const result = myMap(array, newElement => newElement*5);
console.log(result); */
//Contains: Retorna verdadero o falso si el valor esta presente en el arreglo
const numeros = [1, 3, 4, 5, 6];
function contains(array, value) {
    for(let i = 0; i<array.length; i++){
        if(array[i]===value){
            return true
        } else {return false}
    }
}
const result = contains(numeros,1)
console.log(result);
//Pluck: Resive un array y una propiedad pra que regrese un arreglo con los elementos que contiene la propiedad de
//los objetos del array principal.
/* const users = [{name: 'edgar', age: 40}, {name: 'luis', age: 20}, {name: 'erik', age: 30}, {name: 'julio', age: 25}]
function myPluck(array, name) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i][name]);
    }
    return newArray;
}
const result = myPluck (users, 'name');
console.log(result); */
//Con Maps
/* function myPluck(arreglo, property){
    const newArray = array.map((elemento)=>elemento[property]);
    return newArray;
}
const result = myPluck(users, 'name');
console.log(result); */
//WITHOUT: recibe un array y n valores que se eleminarán del array el cual vuelve a retornar un nuevo arreglo.
/* function myWithout(array, ...n) {
//creamos dos for para recorrer i del primer array y j para recorrer el segundo array que contiene los valores
//que deseamos eliminar.
//con con array.slice creamos una copia de el arreglo principal.
    let newArray=array.slice();
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < n.length; j++){
            if(array[i]===n[j]){
                //sustituimos los valores que que cumplen la condicion por el valor cero con el método splice.
                newArray.splice(i,1,0);
            }
        }
    }
    //console.log(newArray)
    //Aplicamos filter al nuevo arreglo y presentamos los valores que son diferentes de cero.
    const new2=newArray.filter(element=>element!=0)
    return new2;
}
const result = myWithout(numeros,1,4,6);
console.log(result); */
