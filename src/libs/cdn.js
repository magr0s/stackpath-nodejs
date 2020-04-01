const Stackpath = require('./stackpath')

class CDNStackpath extends Stackpath {
  dnsTargets (stackId, siteId) {
    const options = {
      method: 'GET'
    }

    return this.fetch(`cdn/v1/stacks/${stackId}/sites/${siteId}/dns/targets`, options)
      .then(({ addresses }) => (addresses))
  }

  sslRequest (stackId, siteId) {
    const options = {
      method: 'POST'
    }

    return this.fetch(`cdn/v1/stacks/${stackId}/sites/${siteId}/certificates/request`, options)
      .then(result => (console.log(JSON.stringify(result))))
  }

  getScopes (stackId, siteId) {
    const options = {
      method: 'GET'
    }

    return this.fetch(`cdn/v1/stacks/${stackId}/sites/${siteId}/scopes`, options)
      .then(({ results }) => (results))
  }

  addRule (stackId, siteId, scopeId, params) {
    const options = {
      method: 'POST',
      body: JSON.stringify(params)
    }

    return this.fetch(`cdn/v1/stacks/${stackId}/sites/${siteId}/scopes/${scopeId}/rules`, options)
  }
}

module.exports = CDNStackpath
