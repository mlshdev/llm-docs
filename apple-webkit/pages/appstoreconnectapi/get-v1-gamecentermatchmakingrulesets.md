> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecentermatchmakingrulesets](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecentermatchmakingrulesets)

# List All Rule Sets

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Get information about all rule sets and their associated objects.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets
```

## Query Parameters

- `fields[gameCenterMatchmakingQueues]` — `[string]`: The fields of the queues to include in the response.
  **Allowed values:** `referenceName`, `classicMatchmakingBundleIds`, `ruleSet`, `experimentRuleSet`
- `fields[gameCenterMatchmakingRuleSets]` — `[string]`: The fields of the rule sets to include in the response.
  **Allowed values:** `referenceName`, `ruleLanguageVersion`, `minPlayers`, `maxPlayers`, `teams`, `rules`, `matchmakingQueues`
- `fields[gameCenterMatchmakingRules]` — `[string]`: The fields of the rules to include in the response.
  **Allowed values:** `referenceName`, `description`, `type`, `expression`, `weight`
- `fields[gameCenterMatchmakingTeams]` — `[string]`: The fields of the teams to include in the response.
  **Allowed values:** `referenceName`, `minPlayers`, `maxPlayers`
- `include` — `[string]`: The relationships to include in the response.
  **Allowed values:** `teams`, `rules`, `matchmakingQueues`
- `limit` — `integer`: The maximum number of rule sets to fetch.
  **Maximum:** `200`
- `limit[matchmakingQueues]` — `integer`: The maximum number of queues to fetch.
  **Maximum:** `50`
- `limit[rules]` — `integer`: The maximum number of rules to fetch.
  **Maximum:** `50`
- `limit[teams]` — `integer`: The maximum number of teams to fetch.
  **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterMatchmakingRuleSetsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading rule set information

- [Read Rule Set Information](get-v1-gamecentermatchmakingrulesets-_id_.md): Get information about a specific rule set and its related objects.
- [List Queues in a Rule Set](get-v1-gamecentermatchmakingrulesets-_id_-matchmakingqueues.md): Get information about queues that belong to a rule set.
- [List matchmaking queue IDs for a Game Center matchmaking rule set](get-v1-gamecentermatchmakingrulesets-_id_-relationships-matchmakingqueues.md)
- [List Rules in a Rule Set](get-v1-gamecentermatchmakingrulesets-_id_-rules.md): Get information about the rules in a rule set.
- [List rule IDs for a Game Center matchmaking rule set](get-v1-gamecentermatchmakingrulesets-_id_-relationships-rules.md)
- [List Teams in a Rule Set](get-v1-gamecentermatchmakingrulesets-_id_-teams.md): Get information about the teams in a rule set.
- [List team IDs for a Game Center matchmaking rule set](get-v1-gamecentermatchmakingrulesets-_id_-relationships-teams.md)
