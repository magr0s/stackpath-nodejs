const fetch = require('node-fetch-npm')
const { API_URL } = require('../configs/api.json')

class Stackpath {
  constructor (credentials) {
    this.credentials = credentials
  }

  async fetch (endpoint, options) {
    try {
      await this._auth()

      const api = this._makeURL(endpoint)

      const headers = {
        authorization: `Bearer ${this.accessToken}`,
        accept: 'application/json',
        'content-type': 'application/json'
      }

      Object.assign(options, { headers })

      const result = await fetch(api, options)

      return await result.json()
    } catch (error) {
      throw error
    }
  }

  _makeURL (endpoint) {
    return `${API_URL}/${endpoint}`
  }

  async _auth () {
    const api = this._makeURL('identity/v1/oauth2/token')

    const credentials = Object.assign({
      grant_type: 'client_credentials'
    }, this.credentials)

    const options = {
      method: 'POST',
      body: JSON.stringify(credentials)
    }

    const { access_token: accessToken } = await fetch(api, options)
      .then(response => (response.json()))

    this.accessToken = accessToken
  }
}

module.exports = Stackpath
