function avg(arr) {
    var sum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    var avg = sum / arr.length;
    return avg;
}
var data1 = [96, 108, 89];
var data2 = [88, 91, 110];
var avgDolphins = avg(data1).toFixed(1)
var avgKoala = avg(data2).toFixed(1)
console.log(`Average score of DolPhins : ${avgDolphins}`);
console.log(`Average score of Koala : ${avgKoala}`);