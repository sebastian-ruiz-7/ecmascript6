//Example 1 (default parameters in a function)
function newFunction(name,age,country){
    var name=name ||'Sebastián';
    var age=age ||21;
    var country=country|| 'México';
    console.log(name,age,country);
}


//How to do it with ES6
function newFunctionES6(name='Sebastián',age=21,country='México'){
    console.log(name,age,country);
}

newFunctionES6(); //This functions is executed with the default parameters given when we created the function
newFunctionES6('Aldo',25,'México'); //This function is executed with the given parameters 


//Example 2 (Use of ``)
let hello='Hello';
let world='World';
let epicPhrase=hello + ' ' + world;
console.log(epicPhrase);
//How to do it with ES6
let epicPhraseES6=`${hello} ${world}`;
console.log(epicPhraseES6);

