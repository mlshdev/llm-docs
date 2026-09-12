> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-gamecenterleaderboardsetversions](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-gamecenterleaderboardsetversions)

# Create a Game Center Leaderboard Set Version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Create a Game Center leaderboard set version.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardSetVersions
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardSetVersionV2CreateRequest`

## Response Codes

- `201` Created — `GameCenterLeaderboardSetVersionV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- 201:
- 400:
- 401:
- 403:
- 409:
- 422:
- 429:

## See Also

### Reading and creating leaderboard set versions

- [Read Game Center Leaderboard Set Version Information](get-v2-gamecenterleaderboardsetversions-_id_.md): Get information about a specific Game Center leaderboard set version.
- [List All Localizations for a Game Center Leaderboard Set Version](get-v2-gamecenterleaderboardsetversions-_id_-localizations.md): Get a list of localizations for a specific Game Center leaderboard set version.
- [Get All Localization IDs for a Game Center Leaderboard Set Version](get-v2-gamecenterleaderboardsetversions-_id_-relationships-localizations.md): Get a list of localization resource IDs for a specific Game Center leaderboard set version.
