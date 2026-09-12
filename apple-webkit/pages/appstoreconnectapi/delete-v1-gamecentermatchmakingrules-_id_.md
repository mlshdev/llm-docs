> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecentermatchmakingrules-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecentermatchmakingrules-_id_)

# Delete a Rule

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Delete a matchmaking rule in a rule set.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRules/{id}
```

## Path Parameters

- `id` — `string` (required): A unique identifier for the rule.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, modifying, and deleting rules

- [Create a Rule](post-v1-gamecentermatchmakingrules.md): Add a matchmaking rule to a rule set.
- [Modify a Rule](patch-v1-gamecentermatchmakingrules-_id_.md): Update a specific matchmaking rule in a rule set.
