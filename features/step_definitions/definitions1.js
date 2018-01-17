
var { defineSupportCode } = require('cucumber')//// Your step definitions /////

defineSupportCode(function ({ Given, When, Then }) {
	Given(/^a variable set to (\d+)$/, function (num) {
		this.setTo(num);
	});

	When(/^I increment the variable by (\d+)$/, function (num) {
		this.incrementBy(num);
	});

	Then(/^the variable should contain (\d+)$/, function (num) {
		if (this.variable != parseInt(num))
			throw new Error('Variable should contain ' + num +
				' but it contains ' + this.variable + '.');
	});
})