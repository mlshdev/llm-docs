> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenterleaderboardreleases](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenterleaderboardreleases)

# Create a Leaderboard Release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Add a new leaderboard release.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardReleases
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardReleaseCreateRequest`

## Response Codes

- `201` Created — `GameCenterLeaderboardReleaseResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing leaderboard releases

- [List Releases for a Leaderboard](get-v1-gamecenterleaderboards-_id_-releases.md): Deprecated. Read the state of releases for a leaderboard and related information.
- [List release IDs for a Game Center leaderboard](get-v1-gamecenterleaderboards-_id_-relationships-releases.md): Deprecated.
- [Read Leaderboard Release Information](get-v1-gamecenterleaderboardreleases-_id_.md): Deprecated. Read the state of a specific leaderboard release.
- [Delete a Leaderboard Release](delete-v1-gamecenterleaderboardreleases-_id_.md): Deprecated. Delete a new leaderboard release.
