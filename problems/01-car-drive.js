// Your code here
class Car {
	constructor(speed = 0) {
		this.speed = speed
	}

	drive(newSpeed){
		this.speed += newSpeed;
		console.log(newSpeed);
		return this.speed;
	}


}

let car = new Car();
// car.drive(0);     // => returns 0
// console.log(car); // => { speed: 0 }

console.log(car);
car.drive(10);    // => returns 10
console.log(car); // => { speed: 10, }


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}