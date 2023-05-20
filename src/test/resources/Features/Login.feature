Feature: NopCommerce Login
  Background:
    Given User able to Open Browser
    And Enter url
  Scenario Outline:NopCommerce Valid Login Test
    When User click on Login Link
    Then User on Login Page and Verify Login page Title
    And user enter "<UserName>" and "<PassWord>" and click on login button
    Then User is on Home Page
    And User close the Browser

    Examples:
      | UserName | PassWord |
      |minalthakor1223@gmail.com|Mona23|

  Scenario Outline:User Enter Invalid Login Test
    When user Click on LoginButton
    And User on login Page and Verify Login page Title
    And User Enter InValid"<username>"and Enter a valid"<password>" and click on LoginButton
    Then User Should not LoginPage
    Then User Close Browser

    Examples:
      |  username|password|
      |123@.com  |mona    |
