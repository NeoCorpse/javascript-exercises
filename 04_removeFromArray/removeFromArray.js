const removeFromArray = function(list, ...args) {
    return list.filter((a) => !(args.includes(a)))
};

// Do not edit below this line
module.exports = removeFromArray;
