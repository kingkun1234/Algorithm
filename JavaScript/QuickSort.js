/*
 JS实现快速排序
*/

function qucikSort(arr, left, right) {
    var len = arr.length,
        partitionIndex;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? 0 : right;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        qucikSort(arr, left, partitionIndex - 1);
        qucikSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) { // 分区操作
    var pivot = left; // 设定基准值（pivot）
    var index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

function quickSort2(arr, low, high) {
    if (low < high) {
        let pivot = partition2(arr, low, high);
        quickSort2(arr, low, pivot - 1);
        quickSort2(arr, pivot + 1, high);
    }
    return arr;
}

function partition2(arr, low, high) {
    let pivot = arr[low];
    while (low < high) {
        while (low < high && arr[high] > pivot) {
            --high;
        }
        arr[low] = arr[high];
        while (low < high && arr[low] <= pivot) {
            ++low;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}