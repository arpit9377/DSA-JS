
var reverseVowels = function(s) {
    let arr = s.split('');


    const isVowel = char => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (left < right && !isVowel(arr[left])) {
            left++;
        }
        while (left < right && !isVowel(arr[right])) {
            right--;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    let result = arr.join('');
    return result;
};

console.log(reverseVowels("hello"));
