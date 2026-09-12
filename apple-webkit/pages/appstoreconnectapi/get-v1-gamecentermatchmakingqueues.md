> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecentermatchmakingqueues](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecentermatchmakingqueues)

# List All Queues

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Get information about all queues.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingQueues
```

## Query Parameters

- `fields[gameCenterMatchmakingQueues]` — `[string]`: The fields of the queues to include in the response.
  **Allowed values:** `referenceName`, `classicMatchmakingBundleIds`, `ruleSet`, `experimentRuleSet`
- `fields[gameCenterMatchmakingRuleSets]` — `[string]`: **Allowed values:** `referenceName`, `ruleLanguageVersion`, `minPlayers`, `maxPlayers`, `teams`, `rules`, `matchmakingQueues`
- `include` — `[string]`: The type of rule set to include in the response.
  **Allowed values:** `ruleSet`, `experimentRuleSet`
- `limit` — `integer`: The maximum number of queues to fetch.
  **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterMatchmakingQueuesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading queue information

- [Read Queue Information](get-v1-gamecentermatchmakingqueues-_id_.md): Get information about a specific queue and its related objects.
