//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
	if(name==='Tyler'){
		return true;
	}
	else{
		return false;
	}
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
	var name = prompt('what is your name?');
	return name;
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){
	var name = getName();
	alert('Welcome ' + name +'!!');
}

//Next problem




//What is the difference between arguments and parameters?

// parameters are "dummy values" that are used when defining a function.  They are placeholder values
// The arguments are the actual values that are put in when calling the function.  
// The function is called, the arguments fill the value of the parameters, and then function is run

//Next problem



// falsy values:  empty string, (""), NaN, null, undefined, 0, false
// Check for falsey values by using i(!value), where value is one of above.  if statement will lead to code block

  //Answer Here



//Next Problem



//Create a function called myName that returns your name

function myName(){
	return "Peter";
}
//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
	return function(){
		return "Peter";
	};
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
