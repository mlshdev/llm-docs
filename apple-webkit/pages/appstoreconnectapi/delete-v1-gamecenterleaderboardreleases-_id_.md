> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenterleaderboardreleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenterleaderboardreleases-_id_)

# Delete a Leaderboard Release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Delete a new leaderboard release.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardReleases/{id}
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

## See Also

### Managing leaderboard releases

- [List Releases for a Leaderboard](get-v1-gamecenterleaderboards-_id_-releases.md): Deprecated. Read the state of releases for a leaderboard and related information.
- [List release IDs for a Game Center leaderboard](get-v1-gamecenterleaderboards-_id_-relationships-releases.md): Deprecated.
- [Read Leaderboard Release Information](get-v1-gamecenterleaderboardreleases-_id_.md): Deprecated. Read the state of a specific leaderboard release.
- [Create a Leaderboard Release](post-v1-gamecenterleaderboardreleases.md): Deprecated. Add a new leaderboard release.
