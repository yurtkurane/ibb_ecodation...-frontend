//single Commet
/*
multiple Commet
*/

console.log("loglama");
console.log("info");
console.warn("warn");
console.error("error");


alert("pop-up bilgilendirme-1");
window.alert("pop-up bilgilendirme-2");
window.document.writeln("ekranda yazı");

//Variable
var result=4423;
console.log(typeof result+"=>"+result);

var result=44.23;
console.log(typeof result+"=>"+result);

var result="JS öğreniyorum";
console.log("result");

var result=true;
console.log(typeof result+"=>"+result);

// Naming Convensition
var deneme="JS Data";
console.log("deneme");

var deneme44="JS Data";
console.log("deneme44");

var $deneme44="JS Data";
console.log($deneme44);

var _$deneme44="JS Data";
console.log(_$deneme44);

var denemeVerisi="JS Data";
console.log("denemeVerisi");

//var &~44$deneme44="JS Data";
//console.log(44$deneme44);


// whoisitng
result2=56;
var result2;


///////////////////////////////////////////////////
// Operators
// + - * ** / %
// ! değil &&=ve ||=veya
// x++
// x--
// ++x
// --x

// = atama
// ==eşit (türüne bakma)
// ===eşit (türüne bak)

var number1=40;
var number2=5;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);

//cast
//number
//string()
var userData=Number(prompt("Lüten sayı giriniz"))
console.log(userDatab+45);

//undefined
var result4;
console.log(result4);

//NaN: Not a Number
var result5="asd"/4;
console.log(result5);

// is NaN
var result6=4;
console.log(isNaN(result6)); //false: sayıdır

// Infinity
console.log(4/0);


///////////////////////////////////////////////////
// Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(4,1,99,555,-100));
console.log(Math.max(4,1,99,555,-100));

console.log(Math.sqrt(16));
console.log(Math.abs(-25));
console.log(Math.pow(2,5));

console.log(Math.floor(3.9));
console.log(Math.ceil(3.1));
console.log(Math.round(4,4));
console.log(Math.round(4,5));

console.log(Math.sin(45));
console.log(Math.round(Math.random()*9+1));
