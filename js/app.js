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
