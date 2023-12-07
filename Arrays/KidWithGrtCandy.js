var kidsWithCandies = function(candies, extraCandies) {
    res=[];
    let mx=Math.max(...candies);
    for(let i=0;i<candies.length;i++)
    {
        if(candies[i]+extraCandies>=mx)
        {
            res.push(true);

        }
        else
        {
            res.push(false);
        }
    }
    return res ;
};
var candies=[2,3,5,1,3];
var extraCandies=3;

console.log(kidsWithCandies(candies,extraCandies));
