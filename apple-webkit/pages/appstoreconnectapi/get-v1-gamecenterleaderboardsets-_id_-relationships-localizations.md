> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterleaderboardsets-_id_-relationships-localizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterleaderboardsets-_id_-relationships-localizations)

# List localization IDs for a Game Center leaderboard set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardSets/{id}/relationships/localizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterLeaderboardSetLocalizationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading leaderboard sets

- [Read Game Center Leaderboard Set Information](get-v2-gamecenterleaderboardsets-_id_.md): Get information about a specific Game Center leaderboard set.
- [List All Leaderboards for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-gamecenterleaderboards.md): Get a list of leaderboards for a specific Game Center leaderboard set.
- [Get All Leaderboard IDs for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Get a list of leaderboard resource IDs for a specific Game Center leaderboard set.
- [List All Versions for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-versions.md): Get a list of versions for a specific Game Center leaderboard set.
- [Get All Version IDs for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-relationships-versions.md): Get a list of version resource IDs for a specific Game Center leaderboard set.
- [Read Leaderboard Set Information](get-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Read information about a specific leaderboard set.
- [List Leaderboard Information for a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-gamecenterleaderboards.md): Deprecated. Read the leadboards that belong to a learderboard set.
- [List Leaderboard Sets in a Group Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-groupleaderboardset.md): Deprecated. List information about leaderboards and leaderboard sets in a group leaderboard set.
- [List All Localizations for a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-localizations.md): Deprecated. Get a list of localized metadata for a leaderboard set.
- [Read the Leaderboards in a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. List all leaderboards in a leaderboard set.
- [Read the Group Leaderboard Set in a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-relationships-groupleaderboardset.md): Deprecated. List all the group leaderboard sets in a leaderboard set.
- [List Releases for a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-releases.md): Deprecated. Read the state of releases for a leaderboard set and related information.
- [List release IDs for a Game Center leaderboard set](get-v1-gamecenterleaderboardsets-_id_-relationships-releases.md): Deprecated.
