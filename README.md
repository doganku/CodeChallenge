## Kuntay Dogan's code challenge
Simple project setup using various libraries to test UI and API. 
Both API and UI tests can be run with the same command.

- CodeceptJS https://codecept.io/ testing framework for node.js
- REST Helper https://codecept.io/helpers/REST/#rest codeceptJS helper to send API requests
- Testcafe https://devexpress.github.io/testcafe/ a node.js framework for E2E web testing
- Mochaweome https://www.npmjs.com/package/mochawesome custom js reporter
- Chai https://www.chaijs.com/api/bdd/ an assertion library


## Running the tests

```
  clone the repository
  
  cd CodeChallenge
  
  npm install

  npx codeceptjs run --reporter mochawesome
```

## Checking the test report

navigate to mochawesome-report folder and open the mochawesome.html file in a browser, JSON version is at the same location as well
