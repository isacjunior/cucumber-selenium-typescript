import { Given, When, Then, BeforeAll, AfterAll, setDefaultTimeout } from 'cucumber'
import { Builder, By, Key, until, WebDriver } from 'selenium-webdriver'

let driver: WebDriver

BeforeAll(async () => {
  setDefaultTimeout(10000)
  driver = await new Builder().forBrowser('chrome').build()
})

AfterAll(async () => {
  await driver.quit()
})

Given('I am on google', async () => {
  await driver.get('http://www.google.com')
})

When('I search {string}', async (githubUser: string) => {
  const searchInput = await driver.findElement(By.name('q'))
  await searchInput.sendKeys(githubUser, Key.RETURN)
  await driver.wait(until.stalenessOf(searchInput))
})

When('I click in link {string}', async (searchResult: string) => {
  const link = await driver.findElement(By.xpath(`(//h3[@class='LC20lb'][contains(.,"${searchResult}")])[1]`))
  await link.click()
  await driver.wait(until.stalenessOf(link))
})

Then('I should search {string}', async (name: string) => {
  const spanName = driver.findElement(By.css('span[itemprop="name"]'))
  await driver.wait(until.elementTextIs(spanName, name))
})
