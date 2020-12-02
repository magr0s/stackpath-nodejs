const Stackpath = require('./stackpath');

class DeliveryDomainsStackpath extends Stackpath {
  /**
   *
   * @param {String} stackId
   * @param {String} siteId
   * @param {{ domain }} params
   */
  add (stackId, siteId, params) {
    if (!stackId) throw new Error('stackId param is required.');
    if (!siteId) throw new Error('siteId param is required.');

    const options = {
      method: 'POST',
      body: JSON.stringify(params)
    }

    return this.fetch(`delivery/v1/stacks/${stackId}/sites/${siteId}/delivery_domains`, options);
  }
}

module.exports = DeliveryDomainsStackpath;
