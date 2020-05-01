import { When } from 'cucumber';
import { GooglePage, WebDriverUniversity } from '../page-objects';


When('the user types {string} in search bar',function(searchTerm){
  const originalHandle = browser.getWindowHandle();

  browser.getWindowHandles().forEach((handle) =>{
    if(handle !== originalHandle){
      browser.switchToWindow(handle);
      browser.closeWindow();
    }
  });

  browser.switchToWindow(originalHandle);
  GooglePage.searchBox().setValue(searchTerm);
});

When('the user submits the searchterm', function(){
  browser.keys('Enter');
});
When('the user clicks the first link', function(){
  GooglePage.firstLink().click();
});
When('the user clicks in the Contact Us button', function(){
  WebDriverUniversity.contactUsLink().click();
  browser.pause(2000);
  browser.switchToWindow(browser.getWindowHandles()[1]);

});
When('the user fills {string}, {string}, {string}, {string}',function(first, last, email, comments){
  WebDriverUniversity.firstNameInput().setValue(first);
  WebDriverUniversity.lastNameInput().setValue(last);
  WebDriverUniversity.emailInput().setValue(email);
  WebDriverUniversity.commentsInput().setValue(comments);
});
When('the user clicks submit', function(){
  WebDriverUniversity.submitButton().click();
});
When('the user clicks reset', function(){
  WebDriverUniversity.resetButton().click();
});
