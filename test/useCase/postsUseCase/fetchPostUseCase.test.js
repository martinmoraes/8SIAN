const { FetchPostUseCase } = require('../../../src/useCase/postsUseCase/fetchPostUseCase');
const { RequestService } = require('../../../src/servicesApplication/requestService');

describe('FetchPostUseCase', () => {
  let fetchPostUseCase;
  beforeEach(() => {
    fetchPostUseCase = new FetchPostUseCase(new RequestService());
  });

  it('fetchRequest ok', async () => {
    const data = {
      url: 'https://jsonplaceholder.typicode.com/posts',
      max: 50,
    };
    const received = await fetchPostUseCase.fetchRequest(data);
    console.log(received);
    expect(received.length).toEqual(50);
  });
});
