> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecentermatchmakingqueues-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecentermatchmakingqueues-_id_)

# Read Queue Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Get information about a specific queue and its related objects.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingQueues/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the queue.

## Query Parameters

- `fields[gameCenterMatchmakingQueues]` — `[string]`: The fields of the queue to include in the response.
  **Allowed values:** `referenceName`, `classicMatchmakingBundleIds`, `ruleSet`, `experimentRuleSet`
- `include` — `[string]`: The type of rule set to include in the response.
  **Allowed values:** `ruleSet`, `experimentRuleSet`
- `fields[gameCenterMatchmakingRuleSets]` — `[string]`: **Allowed values:** `referenceName`, `ruleLanguageVersion`, `minPlayers`, `maxPlayers`, `teams`, `rules`, `matchmakingQueues`

## Response Codes

- `200` OK — `GameCenterMatchmakingQueueResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading queue information

- [List All Queues](get-v1-gamecentermatchmakingqueues.md): Get information about all queues.
