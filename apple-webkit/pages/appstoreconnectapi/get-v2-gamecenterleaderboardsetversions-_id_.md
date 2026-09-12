> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-gamecenterleaderboardsetversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-gamecenterleaderboardsetversions-_id_)

# Read Game Center Leaderboard Set Version Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get information about a specific Game Center leaderboard set version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardSetVersions/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterLeaderboardSetLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `version`, `image`
- `fields[gameCenterLeaderboardSetVersions]` — `[string]`: **Allowed values:** `version`, `state`, `leaderboardSet`, `localizations`
- `fields[gameCenterLeaderboardSets]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `gameCenterDetail`, `gameCenterGroup`, `gameCenterLeaderboards`, `versions`
- `include` — `[string]`: **Allowed values:** `leaderboardSet`, `localizations`
- `limit[localizations]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterLeaderboardSetVersionV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- fields\[gameCenterLeaderboardSetLocalizations\]:
- fields\[gameCenterLeaderboardSetVersions\]:
- include:
- limit\[localizations\]:
- 200:
- 400:
- 401:
- 403:
- 404:
- 429:

## See Also

### Reading and creating leaderboard set versions

- [List All Localizations for a Game Center Leaderboard Set Version](get-v2-gamecenterleaderboardsetversions-_id_-localizations.md): Get a list of localizations for a specific Game Center leaderboard set version.
- [Get All Localization IDs for a Game Center Leaderboard Set Version](get-v2-gamecenterleaderboardsetversions-_id_-relationships-localizations.md): Get a list of localization resource IDs for a specific Game Center leaderboard set version.
- [Create a Game Center Leaderboard Set Version](post-v2-gamecenterleaderboardsetversions.md): Create a Game Center leaderboard set version.
