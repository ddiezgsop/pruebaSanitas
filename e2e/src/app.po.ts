import {
  browser,
  by,
  element,
  ElementArrayFinder,
  ElementFinder,
  promise,
} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/home');
  }

  getLoginTitle(): promise.Promise<string> {
    return element(by.css('h1')).getText();
  }

  getSubmitButton(): ElementFinder {
    return element(by.css('ion-button'));
  }

  getErrors(): ElementArrayFinder {
    return element.all(by.css('ion-item[color="danger"]'));
  }

  getMailInput(): ElementFinder {
    return element(by.css('input[type="email"]'));
  }

  getPasswordInput(): ElementFinder {
    return element(by.css('input[type="password"]'));
  }
}
