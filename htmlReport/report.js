$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Login",
  "description": "",
  "id": "nopcommerce-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "NopCommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter \"\u003cUserName\u003e\" and \"\u003cPassWord\u003e\" and click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test;",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord"
      ],
      "line": 13,
      "id": "nopcommerce-login;nopcommerce-valid-login-test;;1"
    },
    {
      "cells": [
        "minalthakor1223@gmail.com",
        "Mona23"
      ],
      "line": 14,
      "id": "nopcommerce-login;nopcommerce-valid-login-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter url",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_able_to_Open_Browser()"
});
formatter.result({
  "duration": 9238468292,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_url()"
});
formatter.result({
  "duration": 1576960250,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: Unable to receive message from renderer\n  (failed to check if window was closed: disconnected: not connected to DevTools)\n  (Session info: chrome\u003d113.0.5672.92)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Monas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:4c1:73b0:f4d5:66b6%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.3\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.92, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: /var/folders/sc/2bb0v27s497...}, goog:chromeOptions: {debuggerAddress: localhost:52663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 14a03e05dfbcfeda0f2da2990cf80b1b\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat StepDefinition.Login.enter_url(Login.java:23)\n\tat ✽.And Enter url(Login.feature:4)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "NopCommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter \"minalthakor1223@gmail.com\" and \"Mona23\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_on_Login_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "minalthakor1223@gmail.com",
      "offset": 12
    },
    {
      "val": "Mona23",
      "offset": 44
    }
  ],
  "location": "Login.user_enter_and_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "User Enter Invalid Login Test",
  "description": "",
  "id": "nopcommerce-login;user-enter-invalid-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user Click on LoginButton",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User on login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Enter InValid\"\u003cusername\u003e\"and Enter a valid\"\u003cpassword\u003e\" and click on LoginButton",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Should not LoginPage",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User Close Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "nopcommerce-login;user-enter-invalid-login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "nopcommerce-login;user-enter-invalid-login-test;;1"
    },
    {
      "cells": [
        "123@.com",
        "mona"
      ],
      "line": 25,
      "id": "nopcommerce-login;user-enter-invalid-login-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter url",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_able_to_Open_Browser()"
});
formatter.result({
  "duration": 23954426124,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_url()"
});
formatter.result({
  "duration": 8402315625,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User Enter Invalid Login Test",
  "description": "",
  "id": "nopcommerce-login;user-enter-invalid-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user Click on LoginButton",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User on login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Enter InValid\"123@.com\"and Enter a valid\"mona\" and click on LoginButton",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Should not LoginPage",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User Close Browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Registration.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Register",
  "description": "",
  "id": "nopcommerce-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": ":NopCommerce Valid Registration Test",
  "description": "",
  "id": "nopcommerce-register;:nopcommerce-valid-registration-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User click on Register Link",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Select \"\u003cGender\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on DataOfBirth and Enter \"\u003cDay\u003e\",\"\u003cMonth\u003e\",\"\u003cYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Enter a \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Enter \"\u003cCompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User able to Enter\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter a\"\u003cConfrimPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "nopcommerce-register;:nopcommerce-valid-registration-test;",
  "rows": [
    {
      "cells": [
        "Gender",
        "FirstName",
        "LastName",
        "Day",
        "Month",
        "Year",
        "Email",
        "CompanyName",
        "Password",
        "ConfrimPassword"
      ],
      "line": 17,
      "id": "nopcommerce-register;:nopcommerce-valid-registration-test;;1"
    },
    {
      "cells": [
        "Female",
        "Mona",
        "Patel",
        "23",
        "March",
        "2009",
        "Mona123@gmail.com",
        "UnifyTesting Company",
        "Mona@123",
        "Mona@123"
      ],
      "line": 18,
      "id": "nopcommerce-register;:nopcommerce-valid-registration-test;;2"
    },
    {
      "cells": [
        "Male",
        "Dhaval",
        "Patel",
        "12",
        "May",
        "2007",
        "mona@gmail.com",
        "xyz testing",
        "dhaval123",
        "dhaval123"
      ],
      "line": 19,
      "id": "nopcommerce-register;:nopcommerce-valid-registration-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter Url",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.user_able_to_open_Browser()"
});
formatter.result({
  "duration": 8638879083,
  "status": "passed"
});
formatter.match({
  "location": "Registration.enter_Url()"
});
formatter.result({
  "duration": 4008950583,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ":NopCommerce Valid Registration Test",
  "description": "",
  "id": "nopcommerce-register;:nopcommerce-valid-registration-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User click on Register Link",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Select \"Female\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter \"Mona\" and \"Patel\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on DataOfBirth and Enter \"23\",\"March\",\"2009\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Enter a \"Mona123@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Enter \"UnifyTesting Company\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User able to Enter\"Mona@123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter a\"Mona@123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_click_on_Register_Link()"
});
formatter.result({
  "duration": 1659799417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 13
    }
  ],
  "location": "Registration.user_Select(String)"
});
formatter.result({
  "duration": 469760500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mona",
      "offset": 12
    },
    {
      "val": "Patel",
      "offset": 23
    }
  ],
  "location": "Registration.user_enter_and(String,String)"
});
formatter.result({
  "duration": 701465542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 37
    },
    {
      "val": "March",
      "offset": 42
    },
    {
      "val": "2009",
      "offset": 50
    }
  ],
  "location": "Registration.user_click_on_DataOfBirth_and_Enter(String,String,String)"
});
formatter.result({
  "duration": 426360583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mona123@gmail.com",
      "offset": 14
    }
  ],
  "location": "Registration.user_Enter_a(String)"
});
formatter.result({
  "duration": 65723125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UnifyTesting Company",
      "offset": 12
    }
  ],
  "location": "Registration.user_Enter(String)"
});
formatter.result({
  "duration": 1152341459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mona@123",
      "offset": 19
    }
  ],
  "location": "Registration.user_able_to_Enter(String)"
});
formatter.result({
  "duration": 1582648000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mona@123",
      "offset": 13
    }
  ],
  "location": "Registration.user_enter_a(String)"
});
formatter.result({
  "duration": 346129875,
  "status": "passed"
});
formatter.match({
  "location": "Registration.click_on_Register_Button()"
});
formatter.result({
  "duration": 2361332625,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_close_the_browser()"
});
formatter.result({
  "duration": 192922667,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter Url",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.user_able_to_open_Browser()"
});
formatter.result({
  "duration": 6726198625,
  "status": "passed"
});
formatter.match({
  "location": "Registration.enter_Url()"
});
formatter.result({
  "duration": 1190513500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ":NopCommerce Valid Registration Test",
  "description": "",
  "id": "nopcommerce-register;:nopcommerce-valid-registration-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User click on Register Link",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Select \"Male\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter \"Dhaval\" and \"Patel\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on DataOfBirth and Enter \"12\",\"May\",\"2007\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Enter a \"mona@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Enter \"xyz testing\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User able to Enter\"dhaval123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter a\"dhaval123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_click_on_Register_Link()"
});
formatter.result({
  "duration": 29852250,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.92)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Monas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:4c1:73b0:f4d5:66b6%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.3\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.92, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: /var/folders/sc/2bb0v27s497...}, goog:chromeOptions: {debuggerAddress: localhost:53018}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8f250f3dfc02616ee36c1402616f7759\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.Registration.user_click_on_Register_Link(Registration.java:31)\n\tat ✽.Then User click on Register Link(Registration.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 13
    }
  ],
  "location": "Registration.user_Select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhaval",
      "offset": 12
    },
    {
      "val": "Patel",
      "offset": 25
    }
  ],
  "location": "Registration.user_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 37
    },
    {
      "val": "May",
      "offset": 42
    },
    {
      "val": "2007",
      "offset": 48
    }
  ],
  "location": "Registration.user_click_on_DataOfBirth_and_Enter(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mona@gmail.com",
      "offset": 14
    }
  ],
  "location": "Registration.user_Enter_a(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz testing",
      "offset": 12
    }
  ],
  "location": "Registration.user_Enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dhaval123",
      "offset": 19
    }
  ],
  "location": "Registration.user_able_to_Enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dhaval123",
      "offset": 13
    }
  ],
  "location": "Registration.user_enter_a(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Registration.click_on_Register_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Registration.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});