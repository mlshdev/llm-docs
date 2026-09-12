> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterleaderboards-_id_-relationships-releases](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterleaderboards-_id_-relationships-releases)

# List release IDs for a Game Center leaderboard

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboards/{id}/relationships/releases
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterLeaderboardReleasesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing leaderboard releases

- [List Releases for a Leaderboard](get-v1-gamecenterleaderboards-_id_-releases.md): Deprecated. Read the state of releases for a leaderboard and related information.
- [Read Leaderboard Release Information](get-v1-gamecenterleaderboardreleases-_id_.md): Deprecated. Read the state of a specific leaderboard release.
- [Create a Leaderboard Release](post-v1-gamecenterleaderboardreleases.md): Deprecated. Add a new leaderboard release.
- [Delete a Leaderboard Release](delete-v1-gamecenterleaderboardreleases-_id_.md): Deprecated. Delete a new leaderboard release.
