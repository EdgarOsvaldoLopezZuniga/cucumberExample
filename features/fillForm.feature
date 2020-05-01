Feature: Search for WebDriver University in Google and fill Contact Us form
  The user can fill the Contact Us form in the WebDriver University


Background: User searches for WebDriver University in Google and navigates to the Contact Us page
  Given a user is in the google page
  When the user types "WebDriver University" in search bar
  And the user submits the searchterm
  And the user clicks the first link
  Then the user shoud be in the "WebDriverUniversity.com" page
  When the user clicks in the Contact Us button
  Then the user shoud be in the "WebDriver | Contact Us" page

@CorrectForm
Scenario Outline: User fills the form correctly and clicks submit button
  When the user fills "<firstName>", "<lastName>", "<email>", "<comments>"
  And the user clicks submit
  Then the user shoud be in the "Gianni Bruno - Designer" page

  Examples:
    | firstName | lastName | email | comments |
    | Peter | Parker | peter.parker@mail.com | This is a test comment |
    | Clark | Kent | clark.kent@mail.com | This is another test comment |

@WrongInputs
Scenario Outline: User fills the form wrong and clicks submit button
  When the user fills "<firstName>", "<lastName>", "<email>", "<comments>"
  And the user clicks submit 
  Then the user shoud be in the "Contact form handler" page

  Examples:
    | firstName | lastName | email | comments |
    | Peter | Parker | email | This is a test comment |
    | | Kent | clark.kent@mail.com | This is another test comment |
    | Bill |  | fake.email@mail.com | Wow! Nice! |
    | Peter | Test-Parker |  | This is a test comment |
    | Clark | Test-Kent | clark.kent@mail.com |  |

@ResetForm
Scenario Outline: User fills the form and clicks reset button
  When the user fills "<firstName>", "<lastName>", "<email>", "<comments>"
  And the user clicks reset
  Then the user shoud be in the "WebDriver | Contact Us" page

  Examples:
    | firstName | lastName | email | comments |
    | Peter | Parker | peter.parker@mail.com | This is a test comment |
    | Clark | Kent | clark.kent@mail.com | This is another test comment |
