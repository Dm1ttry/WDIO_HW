Feature: Kinopoisk website

Scenario: Checking email login error  

    Given I open the email login page
    When I input email and click login
    Then I should see an error

Scenario: Checking phone login error  

    Given I open the phone login page
    When I input phone and click login
    Then I should see form error

Scenario: Movie opening and title check 

    Given I open Kinopoisk
    When l scroll and cliclk on movie
    Then I see page movie

Scenario: Article opening and url check 

    Given I am open Kinopoisk
    When I scroll and open article
    Then I see article