import { Given, When, Then, BeforeAll, AfterAll } from 'cucumber'
import { Builder, By, Key, until } from 'selenium-webdriver'

let driver

BeforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build()
})

AfterAll(async () => driver.quit())

Given('I am on google', async () => {
  await driver.get('http://www.google.com/ncr')
})

When('I search input', async () => {
  await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
})

Then('I should search', async () => {
  await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
})
