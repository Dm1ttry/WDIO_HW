import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ , browser} from '@wdio/globals'
import Page from '../pageobjects/page.js';
import LoginPage from '../pageobjects/login.page.js';
import { logger } from '../../log.config.js';


const login = new LoginPage();
const page = new Page();

Given(/^I open the email login page/, async () => {
    await login.openLogin()
    logger.info("Open page")
});

When(/^I input email and click login/ , async () => {
    await  login.loginEmail("12456dawdwa");
    logger.info("Login")
});
Then(/^I should see an error/, async () => {
    await expect(login.ErrorLogin).toBeDisplayed
});

Given(/^I open the phone login page/, async () => {
    await login.openLogin()
});
When(/^I input phone and click login/ , async () => {
    await  login.loginPhone("+30121546452466555");
});
Then(/^I should see form error/, async () => {
    await expect(login.ErrorPhoneForm).toBeDisplayed
})
 
Given(/^I open Kinopoisk/, async () => {
    await page.openKinopoisk()
    logger.info("Open Kinopoisk")
    
});
When(/^l scroll and cliclk on movie/ , async () => {
    await browser.scroll(0, 700)
    await page.OpenMovie()
    logger.info("Open Movie page")
});
Then(/^I see page movie/, async () => {
    await expect(page.NameMovie).toHaveText("Два, три, демон, приди! (2022)")
    logger.info("Movie page")
})

Given(/^I am open Kinopoisk/, async () => {
    await page.openKinopoisk()
});
When(/^I scroll and open article/ , async () => {
    await browser.scroll(0, 1500)
    await  page.ArticleClick()
});
Then(/^I see article/, async () => {
    await expect(browser).toHaveUrl("https://www.kinopoisk.ru/media/article/4008240/")
})
