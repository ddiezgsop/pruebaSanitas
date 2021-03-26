import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate email input', () => {
    const mail = component.form.get('mail');

    mail.setValue('abcd@gmail.com');
    expect(mail.valid).toBeTruthy();

    mail.setValue('hellothere');
    expect(mail.valid).toBeFalsy();

    mail.setValue(null);
    expect(mail.valid).toBeFalsy();
  });

  it('validate password input', () => {
    const password = component.form.get('password');

    password.setValue('12345');
    expect(password.valid).toBeTruthy();

    password.setValue('nope');
    expect(password.valid).toBeFalsy();

    password.setValue(null);
    expect(password.valid).toBeFalsy();
  });

  it('should show errors when submit', () => {
    expect(component.showErrors(component.mail)).toBeFalsy();
    expect(component.showErrors(component.password)).toBeFalsy();

    component.submitLogin();

    expect(component.showErrors(component.mail)).toBeTruthy();
    expect(component.showErrors(component.password)).toBeTruthy();
  });

  it('should call console when valid submit', () => {
    component.form.get('mail').setValue('mockemail@gmail.com');
    component.form.get('password').setValue('12345');

    const logSpy = spyOn(console, 'log');
    component.submitLogin();

    expect(logSpy).toHaveBeenCalledWith('OK!');
  });
});
