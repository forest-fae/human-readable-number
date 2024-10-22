module.exports = function toReadable (number) {
    if (number === 0) {
        return "zero";
    }

    const oneToNineteen = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
        
        const tyS = {
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety",
        };
        
        let writtenNumber = '';
        
        if (number >= 100) {
        writtenNumber +=  oneToNineteen[Math.floor(number / 100)] + " hundred";
        number = number % 100; 
        };
        
        if (number >= 20) {
        writtenNumber += (writtenNumber ? " " : "") + tyS[Math.floor(number / 10)];
        number = number % 10; 
        };
        
        if (number > 0 && number < 20) {
        writtenNumber += (writtenNumber ? " " : "") + oneToNineteen[number];
        };
        
        return writtenNumber.trim();
        
}
