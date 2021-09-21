const { RandomNumberService } = require('./randomNumberService');

class UrlService {
  static preparURL(url, limite) {
    if (Number.isInteger(limite)) {
      return `${url}/${RandomNumberService.generate(limite)}`;
    } else {
      throw new Error('Limite não é um número');
    }
  }
}

module.exports = { UrlService };
