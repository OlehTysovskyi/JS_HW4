function Compare(a, b){
	return b-a;
}
function Filter(arr, i){
	let arrFilter;
	if(i == 1){
		arrFilter = arr.filter(function(num){
			return num >= 0;
		});
		return arrFilter;
	}
	else if(i == -1){
		arrFilter = arr.filter(function(num){
			return num < 0;
		});
		return arrFilter;
	}
	else return 0;
}

let arr = [1, 23, -32, 5, -123, -21, 53, -94, 1234, -1, 0, 43, 765, -87, -24, 0, 335, 23, 642, -432];

/*First Task*/
console.log('======================================\n====================================== \n<--First Task--> \n-Before sorting:');
console.log(arr);

console.log('=================================\n-After sorting(ascending):');
console.log(arr.sort(Compare));

console.log('=================================\n-After sorting(descending):');
console.log(arr.reverse());



/*Second Task*/
console.log('======================================\n====================================== \n<--Second Task--> \n-Before filtering:');
console.log(arr);

console.log('=================================\n-After filtering(positive):');
let posArr = Filter(arr, 1);
console.log(posArr);

console.log('=================================\n-After filtering(negative):');
let negArr = Filter(arr, -1);
console.log(negArr);





