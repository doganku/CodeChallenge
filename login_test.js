Feature('login');

Scenario('successfull login', (I) => {
  I.amOnPage('/login');
  I.seeElement('#login');
  I.fillField('#username', 'tomsmith');
  I.fillField('#password', 'SuperSecretPassword!');
  I.click('#login button');
  I.seeElement('#logout');

});
