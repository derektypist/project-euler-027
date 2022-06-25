// Set Up Global Array
const PRIMES = Array(50000).fill(false);
(function initPrimes(num) {
    const upper = Math.floor((num-1)/2);
    const isPrime = Array(upper).fill(true);
    const sqrtUpper = Math.floor((Math.sqrt(num)-1)/2);
    for (let i=0;i<=sqrtUpper;i++) {
        if (isPrime[i]) {
            const prime = 2 * i + 3;
            PRIMES[prime] = true;
            const primeSquaredIndex = 2 * i ** 2 + 6 * i + 3;
            for (let j=primeSquaredIndex;j<upper;j+=prime) {
                isPrime[j] = false;
            }
        }
    }

    for (let i=sqrtUpper+1;i<upper;i++) {
        if (isPrime[i]) PRIMES[2*i+3] = true;
    }
})(50000);

// Function to Check if the number num is a prime
function isPrime(num) {
    if (num<2) return false;
    if (num !== undefined) return PRIMES[num];
    const sqrt = parseInt(Math.sqrt(num));
    for (let i=2;i<=sqrt;i++) {
        if (num%i===0) return PRIMES[num] = false;
    }
    return PRIMES[num] = true;
}

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>1000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 1000.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt += `Product is ${quadraticPrimes(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to Count the Number of Primes
function countPrimes(a,b) {
    let output = b, n=0, count = 0;
    while (isPrime(output)) {
        count++;
        n++;
        output = n**2 + (a*n) + b;
    }
    return count;
}

/*
    Function to Calculate the Product of Coefficients a and b for the
    quadratic expression that produces the maximum number of primes
    for consecutive values of n, starting with n=0
    quadraticPrimes(200)  returns -4925
    quadraticPrimes(500)  returns -18901
    quadraticPrimes(800)  returns -43835
    quadraticPrimes(1000) returns -59231

*/
function quadraticPrimes(range) {
    let winningProduct = 0, winningCount = 0;
    for (let b=2;b<=range;b++) {
        if (!isPrime(b)) continue;
        for (let a=-range+1;a<=range;a++) {
            if ((b===2 && a%2===1) || (a%2==0)) continue;
            let currentCount = countPrimes(a,b);
            if (currentCount > winningCount) {
                winningProduct = a*b;
                winningCount = currentCount;
            }
        }
    }
    return winningProduct;
}