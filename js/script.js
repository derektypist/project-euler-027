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