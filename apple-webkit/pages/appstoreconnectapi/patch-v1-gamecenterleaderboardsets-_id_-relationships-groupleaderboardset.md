> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecenterleaderboardsets-_id_-relationships-groupleaderboardset](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecenterleaderboardsets-_id_-relationships-groupleaderboardset)

# Edit the relationship between a leaderboard and a group leaderboard

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Modify the group leaderboards in a leaderboard set.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardSets/{id}/relationships/groupLeaderboardSet
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest`

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, editing, and deleting leaderboard sets

- [Create a Game Center Leaderboard Set](post-v2-gamecenterleaderboardsets.md): Create a Game Center leaderboard set.
- [Add a Leaderboard to a Game Center Leaderboard Set](post-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Add a leaderboard to a Game Center leaderboard set.
- [Modify a Game Center Leaderboard Set](patch-v2-gamecenterleaderboardsets-_id_.md): Update a specific Game Center leaderboard set.
- [Modify the Leaderboards for a Game Center Leaderboard Set](patch-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Update the leaderboards relationship for a specific Game Center leaderboard set.
- [Delete a Game Center Leaderboard Set](delete-v2-gamecenterleaderboardsets-_id_.md): Delete a specific Game Center leaderboard set.
- [Delete a Game Center Leaderboard Set](delete-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Delete a specific Game Center leaderboard set.
- [Create a Leaderboard Set](post-v1-gamecenterleaderboardsets.md): Deprecated. Add a new leaderboard set to your app.
- [Create a Relationship Between a Leaderboard and a Leaderboard Set](post-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Add a leaderboard to a leaderboard set.
- [Edit a Leaderboard Set](patch-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Modify the metadata for a leaderboard set.
- [Modify the leaderboards in a leaderboard set](patch-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Edit the positions of leaderboards in an existing leaderboard set.
- [Delete a Leaderboard Set](delete-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Delete a specific leaderboard set.
- [Delete the Relationship Between a Leaderboard and a Leaderboard Set](delete-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Remove a leaderboard from a leaderboard set.
