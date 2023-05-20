Feature: NopCommerce Register
  Background:
    Given User able to open Browser
    And Enter Url
  Scenario Outline: :NopCommerce Valid Registration Test
    Then User click on Register Link
    Then User Select "<Gender>"
    When User enter "<FirstName>" and "<LastName>"
    And User click on DataOfBirth and Enter "<Day>","<Month>","<Year>"
    And User Enter a "<Email>"
    And User Enter "<CompanyName>"
    And User able to Enter"<Password>"
    And User enter a"<ConfrimPassword>"
    And click on Register Button
    Then User close the browser
    Examples:
      |Gender| FirstName |LastName|Day|Month|Year|Email|CompanyName|Password|ConfrimPassword|
      |Female|Mona       |Patel   |23 |March|2009|Mona123@gmail.com|UnifyTesting Company|Mona@123|Mona@123|
    |Male  |Dhaval     |Patel   |12 |May  |2007|mona@gmail.com   |xyz testing         |dhaval123|dhaval123|
