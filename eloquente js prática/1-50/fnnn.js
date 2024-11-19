function power(base, exponent) {
    
    return base * power(base, exponent - 1);
    }
    console.log(power(2, 3))