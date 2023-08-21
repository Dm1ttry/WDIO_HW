import { $, browser } from "@wdio/globals";

export default class LoginPage {
    public openLogin() {
        return browser.url(
            "https://passport.yandex.ru/auth?origin=kinopoisk&retpath=https%3A%2F%2Fsso.passport.yandex.ru%2Fpush%3Fretpath%3Dhttps%253A%252F%252Fwww.kinopoisk.ru%252F%253Futm_referrer%253Dwww.google.com%26uuid%3D5a9a361e-1f62-42d9-b3bb-14cce95fa327"
        );
    }
    public get BottonLogin() {
        return $('//div[@data-tid="1a82203d"]//button[@type="button"]');
    }
    public get inputUsername() {
        return $('//input[@id="passp-field-login"]');
    }
    public get loginBthPhone() {
        return $('//button[@data-type="phone"]');
    }
    public get inputPhone() {
        return $('//input[@id="passp-field-phone"]');
    }
    public get ErrorPhoneForm() {
        return $('//div[@id="field:input-phone:hint"]');
    }
    public get ErrorLogin() {
        return $('//div[@id="field:input-login:hint"]');
    }
    public get btnLogin() {
        return $('//button[@id="passp:sign-in"]');
    }

    public async loginEmail(username: string) {
        await this.inputUsername.setValue(username);
        await this.btnLogin.click();
    }

    public async loginPhone(phone: string) {
        await this.loginBthPhone.click();
        await this.inputPhone.setValue(phone);
        await this.btnLogin.click();
    }
}
