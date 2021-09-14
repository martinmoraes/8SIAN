const { FetchUserUseCase } = require('../../../src/useCase/userUseCase/fetchUserUseCase');
const { RequestService } = require('../../../src/servicesApplication/requestService');

describe('FetchUserUseCase', () => {
  const requestService = new RequestService();
  let fetchUserUseCase;
  beforeAll(() => {
    fetchUserUseCase = new FetchUserUseCase(requestService);
  });

  it('Requisições simultaneas', () => {
    const data = {
      url: 'https://jsonplaceholder.typicode.com/users',
      max: 10,
    };
    const received = fetchUserUseCase.execute(data);
    expect(received).toBeTruthy();
  });

  it('Prepara URL', () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const received = fetchUserUseCase.preparURL(url);
    console.log(received);
    expect(received.length).toBeGreaterThan(url.length);
  });

  describe('FetchRequest', () => {
    it('FetchRequest 10', async () => {
      const data = {
        url: 'https://jsonplaceholder.typicode.com/users',
        max: 10,
      };
      const received = await fetchUserUseCase.fetchRequest(data);
      console.log(received);
      expect(received).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
          }),
        ])
      );
    });
    it('FetchRequest ZERO', async () => {
      const data = {
        url: 'https://jsonplaceholder.typicode.com/users',
        max: 0,
      };
      const received = await fetchUserUseCase.fetchRequest(data);
      console.log(received);
      expect(received).toEqual(expect.arrayContaining([]));
    });
  });
});
