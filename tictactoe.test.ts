import { AssertionError } from "assert/strict"
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Clicking upper left square adds an X to the square', async () => {
    await driver.findElement(By.xpath('//*[@id="cell-0"]')).click()
    await driver.sleep(2000)
})

test('Clicking upper right square adds an X to the square', async () => {
    await driver.findElement(By.xpath('//*[@id="cell-2"]')).click()
    await driver.sleep(2000)
})

test('Clicking lower right square adds an X to the square', async () => {
    await driver.findElement(By.xpath('//*[@id="cell-8"]')).click()
    await driver.sleep(2000)
})


//cell 3 is always o, comp populates in order until 3 then seems to stop
test('computer adds Os onto square', async () => {
    // await driver.findElement(By.xpath('//*[@id="cell-1"]')).click()
    expect (await driver.findElement(By.xpath('//*[@id="cell-1"][contains(text(),"O")]')).click())
    
})

