module.exports = function sumOfOther(arr) {
    const res = [];
    const sum = arr.reduce((a, b) =>{
        return a+b;
    },0);    
    for(let i=0;i<arr.length;i++){
        res.push(sum-arr[i])
    }
    return res
}