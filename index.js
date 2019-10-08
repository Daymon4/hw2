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