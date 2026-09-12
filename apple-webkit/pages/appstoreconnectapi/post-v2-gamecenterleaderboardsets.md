> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-gamecenterleaderboardsets](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-gamecenterleaderboardsets)

# Create a Game Center Leaderboard Set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Create a Game Center leaderboard set.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardSets
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardSetV2CreateRequest`

## Response Codes

- `201` Created — `GameCenterLeaderboardSetV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- 201:
- 400:
- 401:
- 403:
- 409:
- 422:
- 429:

<a id="Discussion"></a>

### Discussion

Create a leaderboard set with a relationship to one of the following:

- `gameCenterDetail`
- `gameCenterGroup`
- `gameCenterLeaderboards`

If you create a leaderboard set with `gameCenterLeaderboards`, any leaderboards you attach are in the same app. If you create a leaderboard set with `gameCenterGroup`, any leaderboards you attach are in the same group.

## See Also

### Creating, editing, and deleting leaderboard sets

- [Add a Leaderboard to a Game Center Leaderboard Set](post-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Add a leaderboard to a Game Center leaderboard set.
- [Modify a Game Center Leaderboard Set](patch-v2-gamecenterleaderboardsets-_id_.md): Update a specific Game Center leaderboard set.
- [Modify the Leaderboards for a Game Center Leaderboard Set](patch-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Update the leaderboards relationship for a specific Game Center leaderboard set.
- [Delete a Game Center Leaderboard Set](delete-v2-gamecenterleaderboardsets-_id_.md): Delete a specific Game Center leaderboard set.
- [Delete a Game Center Leaderboard Set](delete-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Delete a specific Game Center leaderboard set.
- [Create a Leaderboard Set](post-v1-gamecenterleaderboardsets.md): Deprecated. Add a new leaderboard set to your app.
- [Create a Relationship Between a Leaderboard and a Leaderboard Set](post-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Add a leaderboard to a leaderboard set.
- [Edit a Leaderboard Set](patch-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Modify the metadata for a leaderboard set.
- [Modify the leaderboards in a leaderboard set](patch-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Edit the positions of leaderboards in an existing leaderboard set.
- [Edit the relationship between a leaderboard and a group leaderboard](patch-v1-gamecenterleaderboardsets-_id_-relationships-groupleaderboardset.md): Deprecated. Modify the group leaderboards in a leaderboard set.
- [Delete a Leaderboard Set](delete-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Delete a specific leaderboard set.
- [Delete the Relationship Between a Leaderboard and a Leaderboard Set](delete-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Remove a leaderboard from a leaderboard set.
