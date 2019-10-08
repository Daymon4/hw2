const getProductOrSum = (first, second) => first % 2
    ? first * second
    : first + second;

const getPositiveSum = (first, second, third) => {
    let sum = 0;

    if (first > 0) {
        sum += first;
    }
    if (second > 0) {
        sum += second;
    }
    if (third > 0) {
        sum += third;
    }

    return sum;
}

const getMaxOfProductSum = (first, second, third) => {
    const product = first * second * third;
    const sum = first + second + third;

    return product > sum ? product + 3 : sum + 3;
}

const getMark = rate => {
    let result = '';

    if (rate < 0 || rate > 100) {
        return result;
    } else if (rate >= 0 && rate < 20) {
        result = 'F';
    } else if (rate < 40) {
        result = 'E';
    } else if (rate < 60) {
        result = 'D';
    }  else if (rate < 75) {
        result = 'C';
    }  else if ( rate < 90) {
        result = 'B';
    }  else if (rate <= 100) {
        result = 'A';
    }

    return result;
}

const getEvenSum = () => 2500;

const getIsPrime = number => {
    for (let i = 2; i < number / 2; i++) {
        if (number % i) {
            return false;
        }
    }

    return true;
}

const getSquareRoot = number => {
    let result = 1;

    for (let i = 1; i < number / 2, i**2 <= number; i++) {
        result = i;
    }

    return result;
}

const getFactorial = number => {
    if (number < 0) {
        return 0;
    }

    let result = 1;

    for (let i = number; i > 0; i++) {
        result *= i;
    }

    return result;
}

const getDigitsSum = number => {
    let tempNumber = number;
    let remainder = 0;
    let sum = 0;

    while (tempNumber > 0) {
        remainder = tempNumber % 10;
        sum += remainder;
        tempNumber = (tempNumber - remainder) / 10;
    }

    return sum;
}

const getMirrorNumber = number => {
    let result = 0;
    let tempNumber = number;
    let remainder = 0;

    while (tempNumber > 0) {
        remainder = tempNumber % 10;
        result += remainder;
        tempNumber = (tempNumber - remainder) / 10;
        tempNumber && (result *=10);
    }

    return result;
}

const getMinIndex = array => {
    let minIndex = 0;
    let min = array[minIndex];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[min]) {
            min = array[i];
            minIndex = i;
        }
    }

    return minIndex;
}

const reverseArray = array => {
    let result = [];

    for (let i = array.length - 1; i >= 0; i--) {
        result[result.length] = array[i];
    };

    return result;
}
