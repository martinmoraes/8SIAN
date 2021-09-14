const { RandomNumberService } = require('../../serviceDomain/randomNumberService');

class FetchUserUseCase {
  constructor(requestService) {
    this.requestService = requestService;
  }

  async execute(data) {
    return await this.fetchRequest(data);
  }

  async fetchRequest({ url, max }) {
    const request = [];
    while (max > 0) {
      const urlNew = this.preparURL(url);
      const promisesNew = this.requestService.request(urlNew);
      request.push(promisesNew);
      max--;
    }
    const users = await Promise.all(request);
    return users;
  }

  preparURL(url) {
    return `${url}/${RandomNumberService.generate(10)}`;
  }
}

module.exports = { FetchUserUseCase };
