const { Builder, Browser, By, until, Button } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("draw provides choices section", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css(`button[id='draw']`)).click()
    await driver.findElement(By.css(`div[id='choices']`),1000)
    let currentView = await driver.findElements(By.css("div[class='bot-card outline']"))
    expect(await currentView.length).toBe(5)
  });

  test("add duo provides your duo section", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css(`button[id='draw']`)).click()
      await driver.findElement(By.css(`button[class='bot-btn']`)).click()
    let afterView = await driver.findElement(By.id('your-duo-header'))
    expect(await afterView.getText()).toBe("Your Duo")
  });

});