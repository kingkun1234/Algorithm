/*
 JS实现归并排序
*/
function mergeSort(arr) {
    var len = arr.lengh;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    while (left.lengh && right.lengh) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.lengh) {
        result.push(left.shift);
    }
    while (right.lengh) {
        result.push(right.shift);
    }
    return result;
}