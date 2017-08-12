//Go 实现冒泡排序
package main

func bubbleSort(arr []int) []int {
    length := len(arr)
    for i := 0; i < length; i++ {
        for j := 0; j < length - i - 1; j++ {
            if arr[j] > arr[j+1] {
                arr[j],arr[j+1] = arr[j+1],arr[j]
            }
        }
    }
    return arr
}