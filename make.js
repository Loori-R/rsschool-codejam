module.exports = function make(...elems) {
    const length = elems.length;
    const lastElem = elems[length-1];
    if (typeof lastElem == 'function') {
         return elems.slice(0, length - 1).reduce(lastElem) 
    } else {      
        return make.bind(this, ...elems);
    }
}

function sum(a, b) {
    return a + b;
}