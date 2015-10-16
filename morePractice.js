function person(first, last) {
	function sayName(){
		console.log(first + ' ' + last);
	}
	console.log('Done');
	return sayName;
}

var person = Person('Peter', 'Krieg');
person();