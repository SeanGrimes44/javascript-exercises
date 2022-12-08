const removeFromArray = function(items, ...itemsToRemove) {
    for (let i = 0; i < itemsToRemove.length; i++) {
        let removeIndex = items.indexOf(itemsToRemove[i]);
        if (removeIndex >= 0) {
            items.splice(removeIndex, 1);
        }
    }
    return items;
};

// Do not edit below this line
module.exports = removeFromArray;
