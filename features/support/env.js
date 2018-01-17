

var { defineSupportCode } = require('cucumber')

defineSupportCode(function ({ setWorldConstructor }) {
  setWorldConstructor(World)
})

function World() {
  var variable = 0
  this.setTo = function (number) {
    this.variable = parseInt(number)
  }
  this.incrementBy =function (number) {
    this.variable += parseInt(number)
  }

}
