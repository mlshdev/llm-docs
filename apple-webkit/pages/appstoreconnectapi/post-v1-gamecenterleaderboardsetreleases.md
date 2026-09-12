> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenterleaderboardsetreleases](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenterleaderboardsetreleases)

# Create a Leaderboard Set Release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Add a new leaderboard set release.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardSetReleases
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardSetReleaseCreateRequest`

## Response Codes

- `201` Created — `GameCenterLeaderboardSetReleaseResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing leaderboard set releases

- [Read Leaderboard Set Release Information](get-v1-gamecenterleaderboardsetreleases-_id_.md): Deprecated. Get information about a leaderboard set release.
- [Delete a Leaderboard Set Release](delete-v1-gamecenterleaderboardsetreleases-_id_.md): Deprecated. Delete a new leaderboard set release.
