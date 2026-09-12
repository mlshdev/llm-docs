> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecentermatchmakingrules-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecentermatchmakingrules-_id_)

# Modify a Rule

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Update a specific matchmaking rule in a rule set.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRules/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the rule.

## HTTP Body

Content type: `application/json`

Type: `GameCenterMatchmakingRuleUpdateRequest`

## Response Codes

- `200` OK — `GameCenterMatchmakingRuleResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, modifying, and deleting rules

- [Create a Rule](post-v1-gamecentermatchmakingrules.md): Add a matchmaking rule to a rule set.
- [Delete a Rule](delete-v1-gamecentermatchmakingrules-_id_.md): Delete a matchmaking rule in a rule set.
