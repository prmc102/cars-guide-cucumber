$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5600113100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 129848700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BackgroundSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 318437000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click \"Find a Dealer\" link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"https://www.carsguide.com.au/car-dealers\" url page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names displayed on page",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 12
    },
    {
      "cells": [
        "ACT MOTOR TRADERS1"
      ],
      "line": 13
    },
    {
      "cells": [
        "ADELAIDE PRESTIGE"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Dealer",
      "offset": 9
    }
  ],
  "location": "SearchCarsSteps.iClickLink(String)"
});
formatter.result({
  "duration": 1338651800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/car-dealers",
      "offset": 15
    }
  ],
  "location": "FindDealersSteps.iNavigateToUrlPage(String)"
});
formatter.result({
  "duration": 13162400,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesDisplayedOnPage(DataTable)"
});
formatter.result({
  "duration": 335237876300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cp data-cy\u003d\"pagination--arrow-right\" class\u003d\"pagination--arrow is-disabled\"\u003e...\u003c/p\u003e is not clickable at point (712, 606). Other element would receive the click: \u003cdiv class\u003d\"pagination--links\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d115.0.5790.110)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f71fbc3e4540debe344368b41a20a628, clickElement {id\u003d5259C71B1A382B1FC9C4CA5D96CC493A_element_4226}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.110, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\jayen\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62730}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62730/devtoo..., se:cdpVersion: 115.0.5790.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (f71fbc3e4540debe344368b41a20a628)] -\u003e xpath: //div[@class\u003d\u0027pagination\u0027]//p[7]]\nSession ID: f71fbc3e4540debe344368b41a20a628\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.GeneratedMethodAccessor4.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat au.com.carsguide.pages.FindDealersResultPage.isDealerDisplayed(FindDealersResultPage.java:51)\r\n\tat au.com.carsguide.cucumber.steps.FindDealersSteps.iShouldSeeTheDealerNamesDisplayedOnPage(FindDealersSteps.java:22)\r\n\tat ✽.And I should see the dealer names displayed on page(finddealers.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 931824400,
  "status": "passed"
});
});