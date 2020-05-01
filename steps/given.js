import { Given } from 'cucumber';

Given('a user is in the google page', function(){
  browser.url('https://www.google.com');
  browser.pause(5000);
});
