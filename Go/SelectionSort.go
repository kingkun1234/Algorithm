//Go 实现选择排序

func selectionSort(arr []int)[]int {
    length := len(arr)
    for i := 0; i < length - 1; i++ {
        min := i
        for j := i + 1; j < length; j++ {
            if arr[j] < arr[min] {
                min = j
            }
        }
        arr[i],arr[min] = arr[min],arr[i]
    }
    return arr
}