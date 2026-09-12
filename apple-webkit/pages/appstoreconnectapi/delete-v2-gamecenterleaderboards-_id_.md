> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v2-gamecenterleaderboards-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v2-gamecenterleaderboards-_id_)

# Delete a Game Center Leaderboard

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Delete a specific Game Center leaderboard.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboards/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- 204:
- 400:
- 401:
- 403:
- 404:
- 409:
- 429:

## See Also

### Creating, modifying, and deleting leaderboards

- [Create a Game Center Leaderboard](post-v2-gamecenterleaderboards.md): Create a Game Center leaderboard.
- [Modify a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_.md): Update a specific Game Center leaderboard.
- [Modify the Activity for a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_-relationships-activity.md): Update the activity relationship for a specific Game Center leaderboard.
- [Modify the Challenge for a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_-relationships-challenge.md): Update the challenge relationship for a specific Game Center leaderboard.
- [Create a Leaderboard](post-v1-gamecenterleaderboards.md): Deprecated. Add a new leaderboard to your app.
- [Edit a Leaderboard](patch-v1-gamecenterleaderboards-_id_.md): Deprecated. Modify the details of a leaderboard.
- [Edit the Relationship Between a Leaderboard and a Group Leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-groupleaderboard.md): Deprecated. Modify the group leadboard to which a leaderboard belongs.
- [Modify the activity for a Game Center leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-activity.md): Deprecated.
- [Modify the challenge for a Game Center leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-challenge.md): Deprecated.
- [Delete a Leaderboard](delete-v1-gamecenterleaderboards-_id_.md): Deprecated. Delete a leaderboard from your app.
