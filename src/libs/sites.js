const Stackpath = require('./stackpath')

class SitesStackpath extends Stackpath {
  add (stackId, params) {
    const options = {
      method: 'POST',
      body: JSON.stringify(params)
    }

    return this.fetch(`delivery/v1/stacks/${stackId}/sites`, options)
  }
}

module.exports = SitesStackpath
