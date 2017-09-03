import { Fu210nAngularAppPage } from './app.po';

describe('fu210n-angular-app App', () => {
  let page: Fu210nAngularAppPage;

  beforeEach(() => {
    page = new Fu210nAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
