import { Angular2academyPage } from './app.po';

describe('angular2academy App', function() {
  let page: Angular2academyPage;

  beforeEach(() => {
    page = new Angular2academyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
