// var productExceptSelf = function(nums) {
//     let tProd=1;
//     res=[];
//     for(let i=0;i<nums.length;i++)
//     {
//         tProd*=nums[i];
//     }
//     for(let i=0;i<nums.length;i++)
//     {
//        res.push(tProd/nums[i]);
//     }
//     return res;
// };

// const arr=[1,2,6,4];
// console.log(productExceptSelf(arr));

var productExceptSelf = function(nums) {
    let left = [];
    let right = [];
    let res = [];

    left[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    right[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        res[i] = left[i] * right[i];
    }

    return res;
};

const arr = [-1,1,0,-3,3];
console.log(productExceptSelf(arr));
