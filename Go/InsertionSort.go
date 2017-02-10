//Go实现选择排序

func insertionSort(arr []int)[]int {
    for i := range arr {
        preIndex := i - 1
        current = arr[i]
        for preIndex >= 0 && arr[preIndex] > current {
            arr[preIndex+1] = arr[preindex]
            preIndex -= 1
        }
        arr[preIndex+1] = arr[preindex]
    }
    return arr
}