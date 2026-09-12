> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-relationships-leaderboardreleases](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-relationships-leaderboardreleases)

# List leaderboard release IDs for a Game Center detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/relationships/leaderboardReleases
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterDetailLeaderboardReleasesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading and editing Game Center detail leaderboards

- [List All Game Center Leaderboards for a Game Center Detail](get-v1-gamecenterdetails-_id_-gamecenterleaderboardsv2.md): Get a list of leaderboards for a specific Game Center detail.
- [Get All Leaderboard IDs for a Game Center Detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsv2.md): Get a list of leaderboard resource IDs for a specific Game Center detail.
- [Read Leaderboard Releases](get-v1-gamecenterdetails-_id_-leaderboardreleases.md): Deprecated. List all leaderboard releases for a Game Center detail.
- [Get leaderboards information](get-v1-gamecenterdetails-_id_-gamecenterleaderboards.md): Deprecated. Get all leaderboards and related information for a Game Center detail.
- [List Leaderboards](get-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboards.md): Deprecated. ​List all leaderboards for a Game Center detail.
