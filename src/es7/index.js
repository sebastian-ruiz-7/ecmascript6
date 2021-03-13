//Here is goint to study what was added in ES7

//Includes method. This works with arrays and strings.
//This allows us knows if inside a value are an element 

//For example, we use the includes method to see if inside this array are the number 7
let numbers=[1,2,3,7,8];

 if(numbers.includes(7)){
     console.log('Sí se encuentra el valor');
 } else {
    console.log('No se encuentra.')
 }

 //Output: Sí se encuentra

 if(numbers.includes(4)){
    console.log('Sí se encuentra el valor');
} else {
   console.log('No se encuentra.')
}

 //Output: No se encuentra


 let str='Ayer pasé por tu casa cate de mi corazón. Soy aguacate';

 if(str.includes('ayer')){
     console.log('Adivinaste')
 }else{
    console.log('Te la persignaste krnal :(');
 }


 //A new way to calculate exponential numbers

 let base=4;
 let exponent=3;
 let result= base**exponent;
 console.log(result);