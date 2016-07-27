import { WebpackMobilePage } from './app.po';

describe('webpack-mobile App', function() {
  let page: WebpackMobilePage;

  beforeEach(() => {
    page = new WebpackMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
