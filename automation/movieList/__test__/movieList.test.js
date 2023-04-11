const {Builder, Capabilities} = require('selenium-webdriver')

const { By } = require('selenium-webdriver');

require('chromedriver')

let driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie } = require('../index/addMovie');

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

it('should add new movie to list', async () => {
    await addMovie(driver);
  });