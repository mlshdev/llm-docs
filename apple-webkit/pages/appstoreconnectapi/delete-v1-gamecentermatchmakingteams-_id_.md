> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecentermatchmakingteams-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecentermatchmakingteams-_id_)

# Delete a Team

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Delete a game-specific team in a rule set.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingTeams/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the team.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, modifying, and deleting teams

- [Create a Team](post-v1-gamecentermatchmakingteams.md): Add a game-specific team to a rule set.
- [Modify a Team](patch-v1-gamecentermatchmakingteams-_id_.md): Update a specific team in a rule set.
