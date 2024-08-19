function Bmi(mass, height) {
    return (mass / (height * height))
}
var markw = 78;
var markh = 1.69;
var johnw = 92;
var johnh = 1.95;

var BMI1 = Bmi(markw, markh)
var BMI2 = Bmi(johnw, johnh)
var markHigherBMI = BMI1 > BMI2;
console.log(`mark's BMI : ${BMI1} , john's BMI : ${BMI2}`);
console.log('BMI mark higher John : ', markHigherBMI);