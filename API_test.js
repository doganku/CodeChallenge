const expect = require('chai').expect;

Feature('Joke categories');

Scenario('Fetching joke categories from the API', async (I) => {
  const res = await I.sendGetRequest('jokes/categories');
  expect(res.status).to.eql(200);
  expect(res.data.length).to.not.eql(0);
});
