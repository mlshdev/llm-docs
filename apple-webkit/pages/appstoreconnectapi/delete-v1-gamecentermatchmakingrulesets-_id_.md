> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecentermatchmakingrulesets-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecentermatchmakingrulesets-_id_)

# Delete a Rule Set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Delete a rule set along with its matchmaking rules and teams.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets/{id}
```

## Path Parameters

- `id` — `string` (required): A unique identifier for the rule set.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, modifying, and deleting rule sets

- [Create a Rule Set](post-v1-gamecentermatchmakingrulesets.md): Create a rule set to contain matchmaking rules and teams.
- [Modify a Rule Set](patch-v1-gamecentermatchmakingrulesets-_id_.md): Update the attributes of a rule set.
