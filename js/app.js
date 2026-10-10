//Data types => Reference(Non-premetive) va Premetive
//Primitive => 7ta => string, number, boolean, null, undefined, bigInt, symbol
// Non-premetive => function, array, object
// typeof() => qiymatni typeni topib beradi
// string => faqat matnlardan tashkil topgan => "2022", "+"
let str = "bugun bizda 2-dars";
console.log(str);
console.log(typeof str);

// number => raqamlar
let num = 2026;
console.log(num);
console.log(typeof num);

// boolean => true/false
let isOwner = false;
console.log(isOwner);
console.log(typeof isOwner);

// null => kutilayotgan malumot
let data = null;
console.log(data);
console.log(typeof data);

// undefined => yo'q malumot
let noDate;
console.log(noDate);
console.log(typeof noDate);

// bigInt => katta sonlar (n)
let first = 23453242353553453n;
console.log(first);
console.log(typeof first);

// symbol => unique
let id = Symbol(5);
console.log(id);
console.log(typeof id);

// Non-premetive (array, object)
// array => ko'p malumotlarni bitta qutida saqlash
let fruits = ["banana", "apple", "cherry", "grape", "pineapple"];
// index => valueni turgan o'rni
console.log(fruits);
console.log(typeof fruits);
console.log(fruits[2]); //cherry

let types = [{}, "salom", 2026, null, undefined, Symbol(7), 223432n];
console.log(types);
console.log(types[3]); //null
console.log(types[5]); //Symbol(7)

// object => bir katta datani umumiy malumotlari saqlanadi
// object doim => key va value dan tashkil topadi, objectni ichiga nuqta bilan kiramiz
let student = {
  firstName: "MuhammadAli",
  age: 13,
  isStudent: true,
  hobby: "futbol",
};
console.log(student);
console.log(student.hobby);
