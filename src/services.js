const axios = require('axios');

const baseURL = process.env.NODE_ENV === 'production' ?
  'https://app.purpletech.com.br' : 'http://localhost:3000'

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

module.exports = {
  sendMessage(data) {
    return new Promise((resolve, reject) => axios
      .post('/sendMessage', data)
      .then((response) => resolve(response))
      .catch((err) => reject(err))
    );
  },

  getPortfolio() {
    return new Promise((resolve, reject) => axios
      .get('/getPortfolio')
      .then((response) => resolve(response))
      .catch((err) => reject(err))
    );
  },
};
