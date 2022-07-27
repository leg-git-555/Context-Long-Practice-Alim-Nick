const Calculator = require('./02-calculator')

class FancyCalculator extends Calculator {
	constructor (total = 0) {
		super(total);
	}

	setTotal(newTotal) {
		return this.total = newTotal;
	}

	modulo(num) {
		return this.total = this.total % num
	}

	squared() {
		return this.total *= this.total
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
