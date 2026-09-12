> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-relationships-leaderboardsetreleases](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-relationships-leaderboardsetreleases)

# List leaderboard set release IDs for a Game Center detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/relationships/leaderboardSetReleases
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterDetailLeaderboardSetReleasesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading and editing leaderboard sets in a Game Center detail

- [List All Game Center Leaderboard Sets for a Game Center Detail](get-v1-gamecenterdetails-_id_-gamecenterleaderboardsetsv2.md): Get a list of leaderboard sets for a specific Game Center detail.
- [Get All Leaderboard Set IDs for a Game Center Detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsetsv2.md): Get a list of leaderboard set resource IDs for a specific Game Center detail.
- [Get leaderboard sets information](get-v1-gamecenterdetails-_id_-gamecenterleaderboardsets.md): Deprecated. Get all leaderboard sets and related information for a Game Center detail.
- [List Leaderboard Sets](get-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsets.md): Deprecated. List all leaderboards for a Game Center detail.
- [Get leaderboard set releases information](get-v1-gamecenterdetails-_id_-leaderboardsetreleases.md): Deprecated. List all leaderboard set releases for a Game Center detail.
