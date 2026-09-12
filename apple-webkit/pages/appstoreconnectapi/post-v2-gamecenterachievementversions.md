> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-gamecenterachievementversions](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-gamecenterachievementversions)

# Create a Game Center Achievement Version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Create a Game Center achievement version.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/gameCenterAchievementVersions
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterAchievementVersionV2CreateRequest`

## Response Codes

- `201` Created — `GameCenterAchievementVersionV2Response`:
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

### Reading and creating achievement versions

- [Read Game Center Achievement Version Information](get-v2-gamecenterachievementversions-_id_.md): Get information about a specific Game Center achievement version.
- [List All Localizations for a Game Center Achievement Version](get-v2-gamecenterachievementversions-_id_-localizations.md): Get a list of localizations for a specific Game Center achievement version.
- [Get All Localization IDs for a Game Center Achievement Version](get-v2-gamecenterachievementversions-_id_-relationships-localizations.md): Get a list of localization resource IDs for a specific Game Center achievement version.
