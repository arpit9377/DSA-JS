var canPlaceFlowers = function(flowerbed, n) {
    if(n!==0)
    {
        for(let i=0;i<flowerbed.length;i++)
        {
            if(flowerbed[i]==0 && flowerbed[i-1]!==1 && flowerbed[i+1]!==1)
            {
                n--;
                i++;
            }
        }
    }
    return n<=0;
   
};
var flowerbed=[0,0,1,0,0]; 
var n=1;
console.log(canPlaceFlowers(flowerbed,n));