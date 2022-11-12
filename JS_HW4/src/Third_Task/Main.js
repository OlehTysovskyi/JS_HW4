function Student(yearsOfStuding, facultyName) {
	this.yearsOfStuding = yearsOfStuding,
	this.facultyName = facultyName
}

function Filter(arr, i){	
	let arr2 = new Array(arr.length);
	if(i == 1){
		for(let i=0; i<arr.length; i++){
			arr2[i] = arr[i].facultyName;
		}
		return arr2;
	}
	else if(i == 2){
		for(let i=0; i<arr.length; i++){
			arr2[i] = arr[i].yearsOfStuding;
		}
				return arr2;
	}
	else return 0;
}

let studentArr = [new Student(2, 'Logos IT Academy'), new Student(9, 'Lviv Gymnasium'), 
					new Student(2, 'EPAM'), new Student(11, 'Sambir Gymnasium'),
					new Student(11, 'Secondary School №2'), new Student(4, 'Elementary School'),
					new Student(5, 'University Ivan Franko'), new Student(4, 'Lviv Polinechnic'),
					new Student(1, 'Logos IT Academy'), new Student(3, 'Sambir Art College'),];

let faculNamesArr = Filter(studentArr, 1);
console.log('============================================\n-Array of faculty names:');
console.log(faculNamesArr);



let yearsOfStudArr = Filter(studentArr, 2);
let Sum = yearsOfStudArr.reduce(function(sum, current){
	return sum + current;
});
console.log('============================================\n-Suma of years of studing = [' + Sum + ']');
