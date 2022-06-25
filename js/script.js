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

// Function to Check if number num is prime
function isPrime(num) {
    if (num<2) return false;
    if (num !== undefined) return PRIMES[num];
    const sqrt = parseInt(Math.sqrt(num));
    for (let i=2;i<=sqrt;i++) {
        if (num%i===0) return PRIMES[num] = false;
    }
    return PRIMES[num] = true;
}