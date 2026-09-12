> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterleaderboards-_id_-relationships-groupleaderboard](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterleaderboards-_id_-relationships-groupleaderboard)

# List all groups to which a leaderboard belongs

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

List associated group leaderboards for a specific leaderboard.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboards/{id}/relationships/groupLeaderboard
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the leaderboard resource ID from the [Get leaderboards information](get-v1-gamecenterdetails-_id_-gamecenterleaderboards.md) response.

## Response Codes

- `200` OK — `GameCenterLeaderboardGroupLeaderboardLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading leaderboards

- [Read Game Center Leaderboard Information](get-v2-gamecenterleaderboards-_id_.md): Get information about a specific Game Center leaderboard.
- [List All Versions for a Game Center Leaderboard](get-v2-gamecenterleaderboards-_id_-versions.md): Get a list of versions for a specific Game Center leaderboard.
- [Get All Version IDs for a Game Center Leaderboard](get-v2-gamecenterleaderboards-_id_-relationships-versions.md): Get a list of version resource IDs for a specific Game Center leaderboard.
- [Read Leaderboard Information](get-v1-gamecenterleaderboards-_id_.md): Deprecated. Read information about a specific leaderboard.
- [Read Group Information for a Leaderboard](get-v1-gamecenterleaderboards-_id_-groupleaderboard.md): Deprecated. Read the group leadboard to which a leaderboard belongs.
- [List All Localizations for a Leaderboard](get-v1-gamecenterleaderboards-_id_-localizations.md): Deprecated. Get a list of localized metadata for a leaderboard.
- [List localization IDs for a Game Center leaderboard](get-v1-gamecenterleaderboards-_id_-relationships-localizations.md): Deprecated.
- [List Releases for a Leaderboard](get-v1-gamecenterleaderboards-_id_-releases.md): Deprecated. Read the state of releases for a leaderboard and related information.
- [List release IDs for a Game Center leaderboard](get-v1-gamecenterleaderboards-_id_-relationships-releases.md): Deprecated.
