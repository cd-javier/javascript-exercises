const removeFromArray = function (array, target1 = -1, target2 = -1, target3 = -1, target4 = -1)  {
    const targetList = [target1, target2, target3, target4]
    for (let i = 0; i < targetList.length; i++) {
        const target = targetList[i]
        let targetIndex = array.indexOf(target)
        if (targetIndex < 0) { continue }
        array.splice(targetIndex, 1);
        targetIndex = array.indexOf(target)
        if (targetIndex < 0) { continue }
        i--
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
