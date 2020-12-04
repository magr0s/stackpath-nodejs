const Stackpath = require('./stackpath')

class CDNStackpath extends Stackpath {
  dnsTargets (stackId, siteId) {
    const options = {
      method: 'GET'
    }

    return this.fetch(`cdn/v1/stacks/${stackId}/sites/${siteId}/dns/targets`, options)
  }

  certificatesRequest (stackId, siteId, params) {
    const options = {
      method: 'POST',
      body: JSON.stringify(params)
    }

    return this.fetch(`cdn/v1/stacks/${stackId}/sites/${siteId}/certificates/request`, options)
  }

  getScopes (stackId, siteId) {
    const options = {
      method: 'GET'
    }

    return this.fetch(`cdn/v1/stacks/${stackId}/sites/${siteId}/scopes`, options)
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
