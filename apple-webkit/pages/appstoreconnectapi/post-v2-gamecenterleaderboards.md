> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-gamecenterleaderboards](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-gamecenterleaderboards)

# Create a Game Center Leaderboard

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Create a Game Center leaderboard.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboards
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardV2CreateRequest`

## Response Codes

- `201` Created — `GameCenterLeaderboardV2Response`:
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

## See Also

### Creating, modifying, and deleting leaderboards

- [Modify a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_.md): Update a specific Game Center leaderboard.
- [Modify the Activity for a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_-relationships-activity.md): Update the activity relationship for a specific Game Center leaderboard.
- [Modify the Challenge for a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_-relationships-challenge.md): Update the challenge relationship for a specific Game Center leaderboard.
- [Delete a Game Center Leaderboard](delete-v2-gamecenterleaderboards-_id_.md): Delete a specific Game Center leaderboard.
- [Create a Leaderboard](post-v1-gamecenterleaderboards.md): Deprecated. Add a new leaderboard to your app.
- [Edit a Leaderboard](patch-v1-gamecenterleaderboards-_id_.md): Deprecated. Modify the details of a leaderboard.
- [Edit the Relationship Between a Leaderboard and a Group Leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-groupleaderboard.md): Deprecated. Modify the group leadboard to which a leaderboard belongs.
- [Modify the activity for a Game Center leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-activity.md): Deprecated.
- [Modify the challenge for a Game Center leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-challenge.md): Deprecated.
- [Delete a Leaderboard](delete-v1-gamecenterleaderboards-_id_.md): Deprecated. Delete a leaderboard from your app.
