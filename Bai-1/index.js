function Bmi(mass, height) {
    return (mass / (height * height))
}
// bài 1
var markw = 78;
var markh = 1.69;
var johnw = 92;
var johnh = 1.95;

var BMI1 = Bmi(markw, markh)
var BMI2 = Bmi(johnw, johnh)

var markHigherBMI = BMI1 > BMI2;
console.log(markHigherBMI);
// bài 2
BMI1 > BMI2 ? console.log("1.Mark's BMI is higher than John's !") : console.log("1.John's BMI is higher than Marks's !");
BMI1 > BMI2 ? console.log(`1.Mark's BMI(${BMI1.toFixed(0)}) is higher than John's(${BMI2.toFixed(0)}) !`) : console.log(`1.John's BMI(${BMI1.toFixed(0)}) is higher than Marks's(${BMI2.toFixed(0)}) !`);