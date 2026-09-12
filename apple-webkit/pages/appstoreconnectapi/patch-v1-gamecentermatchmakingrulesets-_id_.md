> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecentermatchmakingrulesets-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecentermatchmakingrulesets-_id_)

# Modify a Rule Set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Update the attributes of a rule set.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets/{id}
```

## Path Parameters

- `id` — `string` (required): A unique identifier for the rule set.

## HTTP Body

Content type: `application/json`

Type: `GameCenterMatchmakingRuleSetUpdateRequest`

## Response Codes

- `200` OK — `GameCenterMatchmakingRuleSetResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, modifying, and deleting rule sets

- [Create a Rule Set](post-v1-gamecentermatchmakingrulesets.md): Create a rule set to contain matchmaking rules and teams.
- [Delete a Rule Set](delete-v1-gamecentermatchmakingrulesets-_id_.md): Delete a rule set along with its matchmaking rules and teams.
