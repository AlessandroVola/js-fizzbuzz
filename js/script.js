
// inizio ciclo
console.log('inizio');
let i;
for (i = 1; i < 100; i++) {

    // multiplo di 15
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    }

    // multiplo di 3
    else if (i % 3 == 0) {
        console.log("Fizz");
    }

    // multiplo di 5
    else if (i % 5 == 0) {
        console.log("Buzz");
    }

    // resto dei numeri
    else {
        console.log(i)
    }




}




