//GO实现归并排序

func mergeSort(arr []int)[]int{
	length := len(arr)
	if length < 2{
		return arr
	}
	middle := length / 2
	left,right := arr[:middle],arr[middle:]
	return merge(mergeSort(left),mergeSort(right))
}

func merge(left,right []int)[]int{
	var result []int
	for len(left)!=0&&len(right)!=0{
		if(left[0] <= right[0]){
			result = append(result,left[0])
			left = left[1:]
		}else{
			result = append(result,right[0])
			right = right[1:]
		}
	}

	for len(left) != 0{
		result = append(result,left[0])
		left = left[1:]
	}
	for len(right) != 0{
		result = append(result,right[0])
		right = right[1:]
	}
	return result
}