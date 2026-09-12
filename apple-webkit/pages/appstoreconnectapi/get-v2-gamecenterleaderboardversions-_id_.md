> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-gamecenterleaderboardversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-gamecenterleaderboardversions-_id_)

# Read Game Center Leaderboard Version Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get information about a specific Game Center leaderboard version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardVersions/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterLeaderboardLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `formatterOverride`, `formatterSuffix`, `formatterSuffixSingular`, `description`, `version`, `image`
- `fields[gameCenterLeaderboardVersions]` — `[string]`: **Allowed values:** `version`, `state`, `leaderboard`, `localizations`
- `fields[gameCenterLeaderboards]` — `[string]`: **Allowed values:** `defaultFormatter`, `referenceName`, `vendorIdentifier`, `submissionType`, `scoreSortType`, `scoreRangeStart`, `scoreRangeEnd`, `recurrenceStartDate`, `recurrenceDuration`, `recurrenceRule`, `archived`, `activityProperties`, `visibility`, `gameCenterDetail`, `gameCenterGroup`, `gameCenterLeaderboardSets`, `activity`, `challenge`, `versions`
- `include` — `[string]`: **Allowed values:** `leaderboard`, `localizations`
- `limit[localizations]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterLeaderboardVersionV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- fields\[gameCenterLeaderboardLocalizations\]:
- fields\[gameCenterLeaderboardVersions\]:
- include:
- limit\[localizations\]:
- 200:
- 400:
- 401:
- 403:
- 404:
- 429:

## See Also

### Reading and creating leaderboard versions

- [List All Localizations for a Game Center Leaderboard Version](get-v2-gamecenterleaderboardversions-_id_-localizations.md): Get a list of localizations for a specific Game Center leaderboard version.
- [Get All Localization IDs for a Game Center Leaderboard Version](get-v2-gamecenterleaderboardversions-_id_-relationships-localizations.md): Get a list of localization resource IDs for a specific Game Center leaderboard version.
- [Create a Game Center Leaderboard Version](post-v2-gamecenterleaderboardversions.md): Create a Game Center leaderboard version.
