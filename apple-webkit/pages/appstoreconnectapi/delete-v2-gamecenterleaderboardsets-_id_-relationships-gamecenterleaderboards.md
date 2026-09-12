> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards](https://developer.apple.com/documentation/appstoreconnectapi/delete-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards)

# Delete a Game Center Leaderboard Set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Delete a specific Game Center leaderboard set.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardSets/{id}/relationships/gameCenterLeaderboards
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardSetV2GameCenterLeaderboardsLinkagesRequest`

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- 204:
- 401:
- 403:
- 404:
- 409:
- 422:
- 429:

## See Also

### Creating, editing, and deleting leaderboard sets

- [Create a Game Center Leaderboard Set](post-v2-gamecenterleaderboardsets.md): Create a Game Center leaderboard set.
- [Add a Leaderboard to a Game Center Leaderboard Set](post-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Add a leaderboard to a Game Center leaderboard set.
- [Modify a Game Center Leaderboard Set](patch-v2-gamecenterleaderboardsets-_id_.md): Update a specific Game Center leaderboard set.
- [Modify the Leaderboards for a Game Center Leaderboard Set](patch-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Update the leaderboards relationship for a specific Game Center leaderboard set.
- [Delete a Game Center Leaderboard Set](delete-v2-gamecenterleaderboardsets-_id_.md): Delete a specific Game Center leaderboard set.
- [Create a Leaderboard Set](post-v1-gamecenterleaderboardsets.md): Deprecated. Add a new leaderboard set to your app.
- [Create a Relationship Between a Leaderboard and a Leaderboard Set](post-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Add a leaderboard to a leaderboard set.
- [Edit a Leaderboard Set](patch-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Modify the metadata for a leaderboard set.
- [Modify the leaderboards in a leaderboard set](patch-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Edit the positions of leaderboards in an existing leaderboard set.
- [Edit the relationship between a leaderboard and a group leaderboard](patch-v1-gamecenterleaderboardsets-_id_-relationships-groupleaderboardset.md): Deprecated. Modify the group leaderboards in a leaderboard set.
- [Delete a Leaderboard Set](delete-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Delete a specific leaderboard set.
- [Delete the Relationship Between a Leaderboard and a Leaderboard Set](delete-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Remove a leaderboard from a leaderboard set.
