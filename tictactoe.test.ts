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
    expect (await driver.findElement(By.xpath('//*[@id="cell-0"][contains(text(),"X")]')))
    await driver.sleep(2000)
})

test('Clicking upper right square adds an X to the square', async () => {
    await driver.findElement(By.xpath('//*[@id="cell-2"]')).click()
    expect (await driver.findElement(By.xpath('//*[@id="cell-2"][contains(text(),"X")]')))
    await driver.sleep(2000)
})

test('Clicking lower right square adds an X to the square', async () => {
    await driver.findElement(By.xpath('//*[@id="cell-8"]')).click()
    expect (await driver.findElement(By.xpath('//*[@id="cell-8"][contains(text(),"X")]')))
    await driver.sleep(2000)
})


//cell 3 is always o, comp populates in order until 3 then seems to stop
test('computer adds an O onto square', async () => {
     expect (await driver.findElement(By.xpath('//*[@id="cell-1"][contains(text(),"O")]')))
    
})


//is there a way to count all the o's on a page? ive been working on this for an hour with no results


// test('should return 3 os in response to 3 x moves', async () => {
//     let tableData = element.findElement(By.xpath('//*/td'))
//     let oCount = 0
//     for (let i = 0; i < tableData.length; i++) {
//         if (tableData[i].textContent == "O" || tableData[i].textContent == 'o') {
//             oCount += 1;
//         }
//     }

//     expect (oCount == 3)

// })
