> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-gamecenterleaderboardsetversions-_id_-relationships-localizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-gamecenterleaderboardsetversions-_id_-relationships-localizations)

# Get All Localization IDs for a Game Center Leaderboard Set Version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get a list of localization resource IDs for a specific Game Center leaderboard set version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardSetVersions/{id}/relationships/localizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterLeaderboardSetVersionV2LocalizationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- limit:
- 200:
- 400:
- 401:
- 403:
- 404:
- 429:

## See Also

### Reading and creating leaderboard set versions

- [Read Game Center Leaderboard Set Version Information](get-v2-gamecenterleaderboardsetversions-_id_.md): Get information about a specific Game Center leaderboard set version.
- [List All Localizations for a Game Center Leaderboard Set Version](get-v2-gamecenterleaderboardsetversions-_id_-localizations.md): Get a list of localizations for a specific Game Center leaderboard set version.
- [Create a Game Center Leaderboard Set Version](post-v2-gamecenterleaderboardsetversions.md): Create a Game Center leaderboard set version.
