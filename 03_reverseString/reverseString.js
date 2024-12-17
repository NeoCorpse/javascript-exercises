const reverseString = function(string) {
    let str = string.split('')
    let array = []
    for (let i = str.length -1; i >= 0 ; i--) {
        array.push(str[i])
    }
    array = array.join('')
    return array
};
// Do not edit below this line
module.exports = reverseString;
