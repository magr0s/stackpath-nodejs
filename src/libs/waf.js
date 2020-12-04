const Stackpath = require('./stackpath');

class WAFStackpath extends Stackpath  {
  async deliveryCertificatesRequest (stackId, siteId, params) {
    if (!stackId) throw new Error('stackId param is required.');
    if (!siteId) throw new Error('siteId param is required.');

    const options = {
      method: 'POST',
      body: JSON.stringify(params)
    }

    return this.fetch(
      `waf/v1/stacks/${stackId}/sites/${siteId}/delivery/certificates/request`,
      options
    );
  }
}

module.exports = WAFStackpath;
