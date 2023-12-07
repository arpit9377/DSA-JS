var gcdOfStrings = function(str1, str2) {
    let n1=str1.length;
    let n2=str2.length;

    if(str1+str2!=str2+str1)
    {
        return ""
    }
    else if(str1==str2)
    {
        return str1;
    }
    else if(n1>n2)
    {
        return gcdOfStrings(str1.substring(n2),str2);
    }
    else
    {
       return gcdOfStrings(str2.substring(n1),str1); 
    }
    
};

console.log(gcdOfStrings("ABABAB","ABAB"));