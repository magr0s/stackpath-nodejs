const Stackpath = require('./stackpath')

class SitesStackpath extends Stackpath {
  list (stackId, params = {}) {
    const requestParams = [
      'first', 'after', 'filter', 'sort_by'
    ];

    const options = {
      method: 'GET'
    }

    let qs = '';

    if (typeof (params) === 'object') {
      const keys = Object.keys(params);

      const entries = Object.entries(
        keys.reduce((memo, key) => {
          if (requestParams.includes(key)) {
            memo[`page_request.${key}`] = params[key]
          }

          return memo;
        }, {})
      );

      qs = entries.map(([k, v]) => (`${k}=${v}`)).join('&');
    }

    return this.fetch(`delivery/v1/stacks/${stackId}/sites?${qs}`, options);
  }

  add (stackId, params) {
    const options = {
      method: 'POST',
      body: JSON.stringify(params)
    }

    return this.fetch(`delivery/v1/stacks/${stackId}/sites`, options)
  }

  delete (stackId, siteId) {
    const options = {
      method: 'DELETE'
    }

    return this.fetch(`delivery/v1/stacks/${stackId}/sites/${siteId}`)
  }
}

module.exports = SitesStackpath;
