const str = process.argv[2];

const isPlaindrome = (str) => {
    return str.split("").reverse().join("")== str;
};

console.log(isPlaindrome(str));