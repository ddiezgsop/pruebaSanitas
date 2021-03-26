import { ElementFinder } from 'protractor';
import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login page', async () => {
    await page.navigateTo();

    const title = await page.getLoginTitle();

    expect(title).toContain('Prueba técnica');
  });

  it('should show errors when submit', async () => {
    await page.navigateTo();

    const button: ElementFinder = page.getSubmitButton();
    await button.click();

    const validations = {
      mail: 'El email introducido no es válido',
      password: 'La contraseña debe tener más de 5 caracteres',
    };

    const errors: ElementFinder[] = await page.getErrors();
    expect(errors.length).toBe(2);

    const mailError = await errors[0].getText();
    expect(mailError).toBe(validations.mail);

    const passwordError = await errors[1].getText();
    expect(passwordError).toBe(validations.password);
  });

  it('should not show errors if submit with valid values', async () => {
    await page.navigateTo();

    const mailInput: ElementFinder = page.getMailInput();
    await mailInput.clear();
    await mailInput.sendKeys('mockemail@gmail.com');

    const passwordInput: ElementFinder = page.getPasswordInput();
    await passwordInput.clear();
    await passwordInput.sendKeys('12345');

    const errors: ElementFinder[] = await page.getErrors();
    expect(errors.length).toBe(0);
  });
});
