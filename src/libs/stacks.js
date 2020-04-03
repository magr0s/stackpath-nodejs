const Stackpath = require('./stackpath')

class StacksStackpath extends Stackpath {
  list () {
    const options = {
      method: 'GET'
    }

    return this.fetch('stack/v1/stacks', options)
  }
}

module.exports = StacksStackpath
