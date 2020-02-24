module.exports = function toReadable(number) {
    if (number === 0) return "zero";

    single = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    var sNum, nNum;
    var result = "";

    if (number > 99) {
        sNum = String(number);
        nNum = Number(sNum.charAt(0));
        result += single[nNum] + " hundred";
        number %= 100;
        if (number > 0) result += " ";
    }

    if (number > 19) {
        sNum = String(number);
        nNum = Number(sNum.charAt(0));
        result += tens[nNum - 2];
        number %= 10;
        if (number > 0) result += " ";
    }

    if (number > 0) {
        nNum = Math.floor(number);
        result += single[nNum];
    }

    return result;
};
