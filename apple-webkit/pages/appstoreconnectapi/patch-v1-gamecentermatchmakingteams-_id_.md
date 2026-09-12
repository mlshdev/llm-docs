> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecentermatchmakingteams-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecentermatchmakingteams-_id_)

# Modify a Team

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Update a specific team in a rule set.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingTeams/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the team.

## HTTP Body

Content type: `application/json`

Type: `GameCenterMatchmakingTeamUpdateRequest`

## Response Codes

- `200` OK — `GameCenterMatchmakingTeamResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, modifying, and deleting teams

- [Create a Team](post-v1-gamecentermatchmakingteams.md): Add a game-specific team to a rule set.
- [Delete a Team](delete-v1-gamecentermatchmakingteams-_id_.md): Delete a game-specific team in a rule set.
