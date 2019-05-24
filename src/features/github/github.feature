Feature: Isac github search

  Scenario Outline: Browse github users on google
  Given I am on google
  When I search <githubUser>
  And I click in link <searchResult>
  Then I should search <name>

  Examples:
    | githubUser | searchResult | name |
    | "github:isacjunior" | "isacjunior (Isac) · GitHub" | "Isac" |
    | "github:Tiagoperes" | "Tiagoperes (Tiago Peres França) · GitHub" | "Tiago Peres França" |
    | "github:raphaelspimenta" | "raphaelspimenta (Raphael de Souza Pimenta) · GitHub" | "Raphael de Souza Pimenta" |

    