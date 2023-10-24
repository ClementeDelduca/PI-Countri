const { expect } = require('chai');
const session = require('supertest-session');
const server = require('../../src/server');
const { Country, conn } = require('../../src/db.js');

const agent = session(server);
const country = {
  id: 'CDP',
  name: 'CountryToDelete',
  flags: 'flag-url',
  continents: 'Test Continent',
  capital: 'Test Capital',
  subregion: 'Test Subregion',
  area: 100,
  population: 1000000
};

describe('Country routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  beforeEach(() => Country.sync()
    .then(() => Country.create(country)));

  afterEach(() => Country.destroy({ where: { id: country.id } }));

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});
