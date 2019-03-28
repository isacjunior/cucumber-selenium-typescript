import { Builder, By, WebDriver, Key, until } from 'selenium-webdriver'

let driver: WebDriver

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build()
})

afterAll(async () => driver.quit())

describe('Feature', () => {
  it('Cenario ', async () => {
    await driver.get('http://www.google.com/ncr')
    const element = driver.findElement(By.name('q'))
    element.sendKeys('webdriver', Key.RETURN)
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
  })
})
