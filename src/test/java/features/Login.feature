Feature: Application Login

Scenario: Home page default login
Given User is on NetBanking landing page
When User login into application with "Sandy" and password "dada"
Then Home page is populated
