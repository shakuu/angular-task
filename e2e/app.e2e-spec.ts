import { AngularTaskPage } from './app.po';

describe('angular-task App', () => {
  let page: AngularTaskPage;

  beforeEach(() => {
    page = new AngularTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
