$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User login into application with \"Sandy\" and password \"dada\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_is_on_NetBanking_landing_page()"
});
formatter.result({
  "duration": 290798724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sandy",
      "offset": 34
    },
    {
      "val": "dada",
      "offset": 55
    }
  ],
  "location": "stepDefination.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 2774662,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 345778,
  "status": "passed"
});
});