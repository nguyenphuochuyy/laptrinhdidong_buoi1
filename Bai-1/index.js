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
BMI1 > BMI2 ? console.log("Mark's BMI is higher than John's !") : console.log("John's BMI is higher than Marks's !");;