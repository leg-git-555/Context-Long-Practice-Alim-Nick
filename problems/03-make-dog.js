// Your code here
class Dog{
	constructor(name){
		this.name = name
	}

	static makeJet(){
		const jet = new Dog ("Jet")
		return jet
	}

	changeName(newName){
		return this.name = newName

	}

	speak(word){
		return `${this.name} says ${word}`
	}

}



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
