import {Then} from 'cucumber';

Then('the user shoud be in the {string} page', function(title){
  expect(browser.getTitle()).to.equal(title);
});

