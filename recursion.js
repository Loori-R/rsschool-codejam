module.exports = function recursion(tree) {  
    let res = [[]];
    const BFS = (node, res, i)=>{
    if (!res[i]){ res[i] = [];}   
        res[i].push(node.value);   
    if(node.left !== undefined){
        BFS(node.left, res, i + 1);}
    if(node.right !== undefined){
        BFS(node.right, res, i + 1);}     
    };
    BFS(tree, res, 0);
    return res;
};