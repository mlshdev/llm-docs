> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-gamecenterleaderboardversions](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-gamecenterleaderboardversions)

# Create a Game Center Leaderboard Version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Create a Game Center leaderboard version.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardVersions
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardVersionV2CreateRequest`

## Response Codes

- `201` Created — `GameCenterLeaderboardVersionV2Response`:
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

### Reading and creating leaderboard versions

- [Read Game Center Leaderboard Version Information](get-v2-gamecenterleaderboardversions-_id_.md): Get information about a specific Game Center leaderboard version.
- [List All Localizations for a Game Center Leaderboard Version](get-v2-gamecenterleaderboardversions-_id_-localizations.md): Get a list of localizations for a specific Game Center leaderboard version.
- [Get All Localization IDs for a Game Center Leaderboard Version](get-v2-gamecenterleaderboardversions-_id_-relationships-localizations.md): Get a list of localization resource IDs for a specific Game Center leaderboard version.
