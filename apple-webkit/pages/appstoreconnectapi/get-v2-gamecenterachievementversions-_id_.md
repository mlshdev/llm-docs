> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-gamecenterachievementversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-gamecenterachievementversions-_id_)

# Read Game Center Achievement Version Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get information about a specific Game Center achievement version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/gameCenterAchievementVersions/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterAchievementLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `beforeEarnedDescription`, `afterEarnedDescription`, `version`, `image`
- `fields[gameCenterAchievementVersions]` — `[string]`: **Allowed values:** `version`, `state`, `achievement`, `localizations`
- `fields[gameCenterAchievements]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `points`, `showBeforeEarned`, `repeatable`, `archived`, `activityProperties`, `gameCenterDetail`, `gameCenterGroup`, `activity`, `versions`
- `include` — `[string]`: **Allowed values:** `achievement`, `localizations`
- `limit[localizations]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterAchievementVersionV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- fields\[gameCenterAchievementLocalizations\]:
- fields\[gameCenterAchievementVersions\]:
- include:
- limit\[localizations\]:
- 200:
- 400:
- 401:
- 403:
- 404:
- 429:

## See Also

### Reading and creating achievement versions

- [List All Localizations for a Game Center Achievement Version](get-v2-gamecenterachievementversions-_id_-localizations.md): Get a list of localizations for a specific Game Center achievement version.
- [Get All Localization IDs for a Game Center Achievement Version](get-v2-gamecenterachievementversions-_id_-relationships-localizations.md): Get a list of localization resource IDs for a specific Game Center achievement version.
- [Create a Game Center Achievement Version](post-v2-gamecenterachievementversions.md): Create a Game Center achievement version.
