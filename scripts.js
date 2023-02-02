//1
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?"
//use the .length method to determine the length of the string value. 
//1 Code Answer
let dogQuestion = "But what if I like dogs more than cats?";
console.log(dogQuestion.length)
//1 Result Answer
// 39


//2
//Write a variable and call it noms and have the value of the name any type of snack you like, 
//use the .length method to determine the length of the string value. 
//2 Code Answer
let noms = "Gummy bears";
console.log(noms.length);
//2 Result Answer
// 11


//3 
//Replace "no" values in the "I have no interest in Boba" in string using the correct method.
//3 Code Answer
let noLove = "I have no interest in Boba";
let bobaLove = noLove.replace("no", "an");
console.log(bobaLove);
//3 Result Answer:
// "I have an interest in Boba"


//4
//Trim this string "Tell me whyyyy!                 ".
//4 Code Answer
let str = "Tell me whyyyy!                 ";
let trim = str.trim();
console.log(trim);
//4 Result Answer
// "Tell me whyyyy!"


//5
// Convert 1400 into a string.
//5 Code Answer:
let num = 1400;
let numToStr = num.toString();
console.log(numToStr);
//5 Result Answer:
// "1400"


//6
//Convert the boolean true and false into integers
//6 Code Answer:
let booTrue = Number(true);
let booFalse = Number(false);
let trueInt = Number.parseInt(booTrue);
console.log(trueInt);
let falseInt = Number.parseInt(booFalse);
console.group(falseInt);
//6 Result Answer:
// 1
// 0


//7
// Convert the string "02130" into an integer
//7 Code Answer:
let newStr = "02130";
let newInt = Number.parseInt(newStr);
console.log(newInt);
//7 Result Answer:
// 2130


//8
//Search the string "Fighting Evil by Moonlight" for "Moonlight" content using the correct method.
//8 Code Answer:
let ito = "Fighting Evil by Moonlight";
let moon = ito.includes("Moonlight");
console.log(moon);
//8 Result Answer:
// true


//9
//Concatenate the following "I love"+ favorite food + Favorite drink "!"
//9 Code Answer:
let love = "I love ";
let favFood = "burgers";
let favDrink = "shakes";
let concat = love.concat(favFood, " and ", favDrink)
console.log(concat);
//9 Result Answer:
// "I love burgers and shakes"


//10
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?", 
//use the .length method to determine the length of the string value. 

//10 Code Answer:

//10 Result Answer:


//11
//Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
//(Hint: Which Math method can you use to do this?)

//11 Code Answer:
console.log(Math.min(85, -3, 5, 93.2, -42.4));
//11 Result Answer:
// -42.4

//12
//Print to the console a random number between 1 to 10.

//12 Code Answer:
console.log(Math.random() * (10-1+1) + 1);
//12 Result Answer:
// 4.47948.....

//13
//Print to the console a random number between 14 to 21.

//13 Code Answer:
console.log(Math.random() * (21 - 14 + 1) + 14);
//13 Result Answer:
// 21.71321....


//14 Challenge! (Optional)
//Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned 

//14 Code Answer:
let today = new Date();
let mm = today.getMonth() + 1;
let dd = today.getDate();
let yyyy = today.getFullYear();
console.log(`${mm}/${dd}/${yyyy}`)
//14 Result Answer:
// 2/2/2023