> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecentermatchmakingrulesets-_id_-matchmakingqueues](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecentermatchmakingrulesets-_id_-matchmakingqueues)

# List Queues in a Rule Set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Get information about queues that belong to a rule set.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets/{id}/matchmakingQueues
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the rule set.

## Query Parameters

- `fields[gameCenterMatchmakingQueues]` — `[string]`: The fields of queues to include in the response.
  **Allowed values:** `referenceName`, `classicMatchmakingBundleIds`, `ruleSet`, `experimentRuleSet`
- `fields[gameCenterMatchmakingRuleSets]` — `[string]`: The fields of the rule set to include.
  **Allowed values:** `referenceName`, `ruleLanguageVersion`, `minPlayers`, `maxPlayers`, `teams`, `rules`, `matchmakingQueues`
- `include` — `[string]`: The relationships to include in the response.
  **Allowed values:** `ruleSet`, `experimentRuleSet`
- `limit` — `integer`: The maximum number of queues to fetch.
  **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterMatchmakingQueuesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading rule set information

- [List All Rule Sets](get-v1-gamecentermatchmakingrulesets.md): Get information about all rule sets and their associated objects.
- [Read Rule Set Information](get-v1-gamecentermatchmakingrulesets-_id_.md): Get information about a specific rule set and its related objects.
- [List matchmaking queue IDs for a Game Center matchmaking rule set](get-v1-gamecentermatchmakingrulesets-_id_-relationships-matchmakingqueues.md)
- [List Rules in a Rule Set](get-v1-gamecentermatchmakingrulesets-_id_-rules.md): Get information about the rules in a rule set.
- [List rule IDs for a Game Center matchmaking rule set](get-v1-gamecentermatchmakingrulesets-_id_-relationships-rules.md)
- [List Teams in a Rule Set](get-v1-gamecentermatchmakingrulesets-_id_-teams.md): Get information about the teams in a rule set.
- [List team IDs for a Game Center matchmaking rule set](get-v1-gamecentermatchmakingrulesets-_id_-relationships-teams.md)
