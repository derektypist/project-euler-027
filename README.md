# Project Euler 027 - Quadratic Primes

Euler discovered the remarkable quadratic formula:

    (n*n) + n + 41

It turns out that the formula will produce 40 primes for the consecutive integer values n = 0 to 39.  However, when n is 40, (40*40) + 40 + 41 = (40)(40+1) + 41 is divisible by 41, and certainly when n = 41, (41*41) + 41 + 41 is clearly divisible by 41.

The incredible formula, (n*n) - 79n + 1601 was discovered, which produces 80 primes for the consecutive values n = 0 to 79.  The product of the coefficients, -79 and 1601 is -126479.

Considering quadratics of the form:

    (n*n) + an + b, where |a| is less than 1000 and |b| is less than or equal to 1000.
    
    Where |n| is the modulus/absolute value of n, e.g. |11| = 11, |-4| = 4.

The aim is to find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.

Information at [Project Euler 027](https://projecteuler.net/problem=27)

## UX

**User Stories**

As a user, I expect the function `quadraticPrimes(200)` to return a number.

As a user, I expect the function `quadraticPrimes(200)` to return -4925.

As a user, I expect the function `quadraticPrimes(500)` to return -18901.

As a user, I expect the function `quadraticPrimes(800)` to return -43835.

As a user, I expect the function `quadraticPrimes(1000)` to return -59231.

**Information Architecture**

The function `quadraticPrimes(range)` returns a number, where `range` is a number between 1 and 1000.