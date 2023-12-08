var reverseWords = function(s) {
    return s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");
};

console.log(reverseWords("a good   example"))