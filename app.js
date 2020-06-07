//    JAVASCRIPT ASSIGNMENTS

//ALERTS

// 1. Write a script to greet your website visitor using JS alert box.        
alert("Welcome To Sohaib's Website");

// 2. Write a script to display following message on your web page:
alert("Error! Please enter a valid password.");

//3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land...\nHappy Coding!");

//4. Write a script to display following messages in sequence:
alert("Welcome to JS Land...");

alert("Happy Coding!");

//5. Generate the following message through browser’s developer console:
console.log("Hello... I can run JS through my web browser's console");

//6. Make use of alerts in your new/existing HTML & CSS project.



//VARIABLES FOR STRINGS

//1. Declare a variable called username.
var username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Sohaib Asif";

//3. Write script to
var message = "Hello World";

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var age = "20 +";
var master = "Certified Mobile application development";;
alert(message);
alert(myName);
alert(age);
alert(master);

//5. Write a script to display the following alert using one JS variable:
for (var a = 5; a >= 1; a--) {
    for (var b = 1; b <= a; b++) {
        if (b == 1) {
            document.write("P");
        }
        else if (b == 2) {
            document.write("I");
        }
        else if (b == 3) {
            document.write("Z");
        }
        else if (b == 4) {
            document.write("Z");
        }
        else if (b == 5) {
            document.write("A");
        }
    }
    document.write("<br>");
}

//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email = ("sohaibasif28@gmail.com");
alert("My email address is " + email);

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript.";
alert(book);

//8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content thorugh JavaScript.")
document.write("<br>");

//9. Store following string in a variable and show in alert and browser through JS 
alert("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”");
document.write("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”");
document.write("<br>");



//VARIABLES FOR NUMBERS
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 20;
alert("I am " + age + " years old");

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitor = 14;
alert("You have visited this site " + visitor + " times");

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 1999;
document.write("My birth year is " + birthYear);
document.write("<br>");
document.write("Data type of my declared variable is number");

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
//a. Visitor’s name
//b. Product title 
//c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
alert("Welcome to www.xyzClothing.com");
var visitorName = prompt("Enter your name");
var ProductTitle = prompt("What do you want to order");
var Quantity = prompt("How many Products");
document.write("<br>");
document.write(visitorName + "ordered" + Quantity + ProductTitle + " on XYZ Clothing Store");
document.write("<br>");
document.write("<br>");


//VARIABLE NAMES: LEGAL & ILLEGAL
//1. Declare 3 variables in one statement.
var var1, var2, var3;

//2. Declare 5 legal & 5 illegal variable names.
//LEGAL
var $name;
var name1;
var birth;
var title;
var user;
//ILLEGAL
// var 41name;
// var 67var_a;
// var $bike#1;
// var ?cat;
// var ??world;

//3. Display this in your browser
document.write("<br>");
document.write("Rules for naming JS variables");
document.write("<br>");
document.write("<br>");
document.write("Variable names can only contain numbers, $ and _ . For example $my_1stVariable");
document.write("<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name");
document.write("<br>");
document.write("Variable names are case sensitive");
document.write("<br>");
document.write("Variable names should not be JS keywords");
document.write("<br>");


//MATH EXPRESSIONS
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//2. Repeat task1 for subtraction, multiplication, division & modulus.
var val1 = prompt("Enter your First value");
var sign = prompt("Enter your Operator");
var val2 = prompt("Enter your Second value");

if (sign === '+') {
    var ans = ((+val1) + (+val2));
    document.write("Sum of " + val1 + " and " + val2 + " is " + ans);
}

else if (sign === '-') {
    var ans = (val1 - val2);
    document.write("Sum of " + val1 + " and " + val2 + " is " + ans);
}

else if (sign === '*') {
    var ans = (val1 * val2);
    document.write("Sum of " + val1 + " and " + val2 + " is " + ans);
}

else if (sign === '/') {
    var ans = (val1 / val2);
    document.write("Sum of " + val1 + " and " + val2 + " is " + ans);
}

else if (sign === '%') {
    var ans = (val1 % val2);
    document.write("Sum of " + val1 + " and " + val2 + " is " + ans);
}

//3. Do the following using JS Mathematic Expressions 
//a. Declare a variable. 
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
//c. Initialize the variable with some number. 
//d. Show the value of variable in your browser like “Initial value: 5”. 
//e. Increment the variable. 
//f. Show the value of variable in your browser like “Value after increment is: 6”. 
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value after addition is: 13”.
//i. Decrement the variable. 
//j. Show the value of variable in your browser like “Value after decrement is: 12”.
//k. Show the remainder after dividing the variable’s value by 3.
//l. Output : “The remainder is : 0”.
var name;
document.write("<br>");
document.write("Value after variable declaration is: ??");
document.write("<br>");
name1 = 5;
document.write("<br>");
document.write("Initial value:" + name1);
document.write("<br>");
name1++;
document.write("<br>");
document.write("Value after increment is:" + name1);
document.write("<br>");
name1 = (+name1) + 7;
document.write("<br>");
document.write("Value after addition is" + name1);
document.write("<br>");
name1--;
document.write("<br>");
document.write("Value after decrement is:" + name1);
document.write("<br>");
name1 = name1 % 3;
document.write("<br>");
document.write("The remainder is :" + name1);
document.write("<br>");

//4. Cost of one movie ticket is 600 PKR. 
//Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var cost = 600;
ans = cost * 5;
document.write("<br>");
document.write("<br>");
document.write("Total cost to buy 5 tickets to a movie is " + ans);
document.write("<br>");

//5. Write a script to display multiplication table of any number in your browser.
document.write("<br>");
document.write("Table of 4");
document.write("<br>");
document.write("4" + "x" + "1" + "=" + 4 * 1 + "<br>");
document.write("4" + "x" + "2" + "=" + 4 * 2 + "<br>");
document.write("4" + "x" + "3" + "=" + 4 * 3 + "<br>");
document.write("4" + "x" + "4" + "=" + 4 * 4 + "<br>");
document.write("4" + "x" + "5" + "=" + 4 * 5 + "<br>");
document.write("4" + "x" + "6" + "=" + 4 * 6 + "<br>");
document.write("4" + "x" + "7" + "=" + 4 * 7 + "<br>");
document.write("4" + "x" + "8" + "=" + 4 * 8 + "<br>");
document.write("4" + "x" + "9" + "=" + 4 * 9 + "<br>");
document.write("4" + "x" + "10" + "=" + 4 * 10 + "<br>");
document.write("<br>");
document.write("<br>");

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
var Celsius = 25;
Celsius = (Fahrenheit - 32) * 5 / 9;
var Fahrenheit = 70;
Fahrenheit = (Celsius * 9 / 5) + 32;
document.write(Celsius);
document.write("<br>");
document.write(Fahrenheit);
document.write("<br>");

//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables.
//a. Price of item 1 
//b. Price of item 2 
//c. Ordered quantity of item 1 
//d. Ordered Quantity of item 2 
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.
document.write("Shopping Cart");
document.write("<br>");
var item1 = 650;
var qitem1 = 3;
var item2 = 100;
var qitem2 = 7;
var shipping = 100;
var total = (item1 * qitem1) + (item2 * qitem2) + shipping;

document.write("Price of item 1 is " + item1);
document.write("<br>");
document.write("Ordered quantity of item 1 is " + qitem1);
document.write("<br>");
document.write("Price of item 2 is " + item2);
document.write("<br>");
document.write("Ordered quantity of item 2 is " + qitem2);
document.write("<br>");
document.write("Shipping Charges " + shipping);
document.write("<br>");
document.write("Total cost of your order is " + total);
document.write("<br>");

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
document.write("Marks Sheet");
var tmarks = 980;
var mobtained = 804;
var percent = (804 / 980) * 100;
document.write("Total marks:" + tmarks);
document.write("<br>");
document.write("Marks Obtainned:" + mobtained);
document.write("<br>");
document.write("Percentage :" + percent);

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var us = 10;
var saudi = 25;
var tus = us * 104.80;
var tsaudi = 25 * 28;
var total = ((+tus) + (+tsaudi));
document.write("<H1>Currency in PKR</H1> </BR>");
document.write("Total Currency in PKR :" + total);

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
//a. Add 5 
//b. Multiply by 10 
//c. Divide the result by 2 Perform all calculations in a single expression
document.write("<br>");
var num1 = 10;
var num2 = (((num1 + 5) * 10) / 2);
document.write(num2);
document.write("<br>");

//11. The Age Calculator: Forgot how old someone is? Calculate it! 
//a. Store the current year in a variable. 
//b. Store their birth year in a variable. 
//c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.
document.write("<br>");
var currYear = 2020;
var birthYear = 1999;
var age = currYear - birthYear;
document.write("Current Year: " + currYear);
document.write("<br>");
document.write("Birth Year: " + birthYear);
document.write("<br>");
document.write("Your age is: " + age);
document.write("<br>");

//12. The Geometrizer: Calculate properties of a circle. 
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var rad = 20;
var circum = (2 * 3.142 * rad);
var area = (3.142 * (rad * rad));
document.write("<H1>the Geometrizer</H1> </BR>");
document.write("Radius of a circle:" + rad);
document.write("<br>");
document.write("The Circumference is:" + circum);
document.write("<br>");
document.write("The Area is :" + area);

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
//a. Store your favorite snack into a variable 
//b. Store your current age into a variable. 
//c. Store a maximum age into a variable. 
//d. Store an estimated amount per day (as a number). 
//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
document.write("<br>");
document.write("The Lifetime Supply Calculator");
document.write("<br>");
var snacks = "Chocolate Chips";
var currAge = 15;
var maxAge = 65;
var amount = 3;
var total1 = (maxAge - currAge) * amount;
document.write("Favourite Snacks: " + snacks);
document.write("<br>");
document.write("Current Age: " + currAge);
document.write("<br>");
document.write("Estimated Maximum Age: " + maxAge);
document.write("<br>");
document.write("Amount of Snacks per day: " + amount);
document.write("<br>");
document.write("You will need " + total1 + " chocolate chip to last you until the ripe old age of 65");
document.write("<br>");


//MATH EXPRESSIONS

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = 10;
document.write("Result :</BR>");
document.write(".....................</BR>");
document.write("The Value of ++a is:" + (++a) + "</BR>Now the value of a is:" + a + "</BR></BR>The Value of a++ is:" + (a++) + "</BR>Now the value of a is :" + a + "</BR></BR>The value of --a:" + (--a) + "</BR>Now the value of a is:" + a + "</BR></BR>The value of a-- is:" + (a--) + "</BR>Now the Value of a is:" + a);
document.write("<br>");

//2. What will be the output in variables a, b & result after execution of the following script:
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("--a");
document.write("</BR>");
document.write("--a - --b");
document.write("</BR>");
document.write("--a - --b + ++b");
document.write("</BR>");
document.write("--a - --b + ++b + b--");
document.write("</BR>");
document.write("a is " + a);
document.write("<BR/>b is " + b);
document.write("</BR>result is " + result);

//3. Write a program that takes input a name from user & greet the user.
document.write("<br>");
var name = prompt("Enter your name");
document.write("WELCOME " + name);
document.write("<br>");

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var num1 = prompt("Enter any number");
document.write("<br>");
for (var i = 1; i <= 10; i++) {
    if (num1 === "") {
        document.write("<br>" + 5 * i + "<br>");
    }
    else {
        document.write("<br>" + num1 * i + "<br>");
    }

}

//6. Take
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
document.write("<br>");
var total = 100;
var englishMarks = 54;


var mathsMarks = 54;
var urduMarks = 48;


var wholeTotal = total * 3;

var obtainedTotal = englishMarks + mathsMarks + urduMarks;


var percentage = (obtainedTotal / wholeTotal) * 100;
document.write("<br>");

document.write("The percentage of yours is " + percentage);
document.write("<br>");


//USER INPUT & CONDITIONAL STATEMENT
//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt("Enter the name of the city ");

if (city === "Karachi") {

    alert("Welcome To The City of lights");
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender");

if (gender === "male") {
    alert("Welcome Sir");
}
if (gender === "female") {
    alert("Welcome Maam");
}

//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var color = prompt("Enter color of current Traffic");

if (color === "red") {
    alert("must Stop");
}

else if (color === "yellow") {
    alert("Ready To Move")
}
else if (color === "green") {
    alert("Ready to move");
}

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var fuel = prompt("Enter the amount of the fuel");

if (fuel < 0.25) {
    alert("Please refuel");
}

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
//a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
//b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
//c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
//d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
//e. if (true){ alert("True"); } if (false){ alert("False"); }
//f. if("car" < "cat"){ alert("car is smaller than cat"); }

document.write("part a is true");
document.write("part b wont run because not true");
document.write("Part c Condition 2 is true");
document.write("part d The Cost is equal in part d");
document.write("part e is true")
document.write("part f is car is smaller than cat");

//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
var totalMarks = 300;
var marksObtained = +prompt("Enter the marks Obtained");
var percentage = (marksObtained / totalMarks) * 100


if (percentage >= 80) {
    document.write("You have A+ grade , Excellent Marks!");
}

else if (percentage >= 70) {
    document.write("You have A grade , Good!");
}

else if (percentage >= 60) {
    document.write("B Grade , You need to improve");

}
else if (percentage < 60) {
    document.write("Fail, Sorry");
}

//7. Guess game:
//Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
//a. If user guesses the same number, show “Bingo! Correct answer”. 
//b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var guessNumber = prompt("Enter the secret number range 1-10");

var guessIt = prompt("Enter the secret number range to guess it 1-10");

if (guessNumber === guessIt) {
    alert("Bingo, Correct Answer!");
}

else if (guessNumber - guessIt === 1) {
    alert("You were almost close!");
}


//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var b = prompt("Enter any number");

if (b % 3 == 0) {
    alert("The number is divisble by 3");
}
else {
    alert("The number is not divisible by 3");
}

//9. Write a program that checks whether the given input is an even number or an odd number.
var b = prompt("Enter any number");

if (b % 2 == 0) {
    alert("The number even Number");
}
else {
    alert("The number odd number");
}

//10. Write a program that takes temperature as input and shows a message based on following criteria 
//a. T > 40 then “It is too hot outside.” 
//b. T > 30 then “The Weather today is Normal.” 
//c. T > 20 then “Today’s Weather is cool.” 
//d. T > 10 then “OMG! Today’s weather is so Cool.”
var t = prompt("Enter temprature");

if (t > 40) {
    prompt("It is too hot outside.")
}
else if (t > 30) {
    prompt("The Weather today is Normal.")
}

else if (t > 20) {
    prompt("Today’s Weather is cool.")
}
else if (t > 10) {
    prompt("Today’s weather is so Cool")
}

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
//a. First number 
//b. Second number 
//c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
var firstNumber = prompt("Enter the first Number");
var secondNumber = prompt("Enter the second Number");
var sign = prompt("Enter the operator");

if (sign === "+") {
    var total = firstNumber + secondNumber;
    document.write("<br>")
    document.write("The addition of 2 numbers is " + total);
}


else if (sign === "-") {
    var total = firstNumber - secondNumber;
    document.write("<br>")
    document.write("The Subtraction of 2 numbers is " + total);
}

else if (sign === "*") {
    var total = firstNumber * secondNumber;
    document.write("<br>")
    document.write("The Multiplication of 2 numbers is " + total);
}

else if (sign === "/") {
    var total = firstNumber / secondNumber;
    document.write("<br>")
    document.write("The Divsion of 2 numbers is " + total);
}


else if (sign === "%") {
    var total = firstNumber * secondNumber;
    document.write("<br>")
    document.write("The Modulus of 2 numbers is " + total);
}


//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
//QUESTION1
var a = prompt("enter any kind of variable");

if (a >= "A" && a <= "Z") {
    document.write("The letter is Capital");

}

else if (a >= "a" && a <= "z") {
    document.write("The letter is lowerCase");


}

else {
    document.write("The variable is not string")
}

//QUESTION2
var a = +prompt("Enter the value of A");
var B = +prompt("Enter the value of B");

if (a === b) {
    document.write("The two numbers are equal <br>");
}

else if (a = b) {
    document.write("a is greater than b");
}

else if (b > a) {
    document.write("b is greater than a");
}

//QUESTION3
var a = +prompt("enter the number");

if (a < 0) {
    document.write("The number is in negative");
}
else if (a === 0) {
    document.write("The number is equal to zero");
}
else {
    document.write("The number is positive");
}

//QUESTION4
var ch = prompt("Enter any character");

if (ch === "a") {
    document.write("The character is vowel");
}

else if (ch === "e") {
    document.write("The character is vowel");
}

else if (ch === "i") {
    document.write("The character is vowel");
}

else if (ch === "o") {
    document.write("The character is vowel");
}

else if (ch === "u") {
    document.write("The character is vowel");
}

else {
    document.write("The character is not vowel");
}

//QUESTION5
var password = prompt("Enter your passowrd");

var verifyPassword = prompt("Re-enter your passowrd");

if (password === verifyPassword) {
    alert("The password is character");
}
else {
    alert("The password is not character, re-enter please!");
}

//QUESTION6
var greeting;
var hour = 13;
if (hour <= 13) {
    greeting = "Good day";
    document.write(greeting)
}
else {
    greeting = "Good evening";
}

//QUESTION7
var time = +prompt("Enter time in whole numbers 24 hours");
if (time >= 00 && time < 12) {
    document.write("Good Morning!");
}


else if (time >= 12 && time < 17) {
    document.write("Good Evening!");
}

else if (time >= 12 && time < 17) {
    document.write("Good Afternoon!");
}

else if (time >= 17 && time < 21) {
    document.write("Good Evening!");
}

else {
    document.write("Good Night!");
}


//ARRAYS

var list = [];
var arrayB = new Array();

list = ["Sohaib", "Azhar", "Saad"];

var numbers = [1, 3, 4, 5, 6];

var bolArr = [true, false];

var mixedArray = ["Sohaib", 0.46, true, "Saad", 5];

var qualifications = ["school", "college", "graduation", "job"];

for (var i = 0; i < 4; i++) {
    document.write(qualification[i] + "<br>");
}

/* qualifcations printing in array */
var qualifications = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.PHILL", "PHD"];

var b = 5;

for (var i = 0; i < 8; i++) {
    document.write(i + (1) + " " + qualifications[i] + "<br>");
}

/* calculating scores through array */
var names = ["Sohaib", "Azhar", "Saad"];

var marks = [320, 230, 480];

for (var i = 0; i < 3; i++) {
    var percentage = [(marks[i] / 500) * 100, (marks[i] / 500) * 100, (marks[i] / 500) * 100];
}

for (var i = 0; i < 3; i++) {

    document.write("Score of " + names[i] + " is " + marks[i] + ". Percentage: " + percentage[i] + "<br>");
}

/* colors from array */
var colors = ["yellow", "green", "blue"];

var askColor = prompt("what color do you want to add in the beginning");

colors.unshift(askColor);


var addAtEnd = prompt("What color do you want to insert at the end of Array");

colors.push(addAtEnd);


colors.push("black", "dark Blue");


colors.shift();

for (var i = 0; i < colors.length; i++) {
    document.write(" " + colors[i] + "<br>");
}


/* cities list */

var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

city.slice(2, 4);



/* Joining Arrays */

var arr = ["This", "is", "my", "cat"];

var newArr = arr.join();

document.write(newArr);

//ARRAYS AND LOOP

for (var i = 1; i < 11; i++) {
    document.write(i + "<br>");
}

/* table of length */

var a = +prompt("enter the table");

var length = +prompt("Enter the length of the table");


var total;
for (var i = 1; i <= length; i++) {

    total = a * i;

    document.write(a + "x" + i + "=" + total + "<br>");

}


/* frutis of array through loop */
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

/*   counting */

for (var i = 0; i < 5; i++) {
    document.write(fruits[i] + "<br>");
}


/*  backward counting */

for (var i = 10; i >= 1; i--) {
    document.write(i + "<br>");
}

/*  even counting */



for (var i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(i + "<br>");

    }



}

/*  Odd counting */



for (var i = 1; i <= 20; i++) {

    if (i % 2 == 1) {
        document.write(i + "<br>");

    }



}

/* series counting */


for (var i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(i + "k<br>");

    }



}

/* finding element in the array */
var A = ["cake", "apple Pie", "cookie", "chips", "patties"];


var search = prompt("Ënter the element you want to search")

for (var i = 0; i < 5; i++) 
{
    if (A[i] === search) {
        document.write("The element is in the array");
        break;
    }
    else {
        document.write("Not in the array");
        break;
    }
}