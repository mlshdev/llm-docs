> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-gamecenterleaderboardsetsv2](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-gamecenterleaderboardsetsv2)

# List All Game Center Leaderboard Sets for a Game Center Detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get a list of leaderboard sets for a specific Game Center detail.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/gameCenterLeaderboardSetsV2
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `fields[gameCenterGroups]` — `[string]`: **Allowed values:** `referenceName`, `gameCenterDetails`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`
- `fields[gameCenterLeaderboardSetVersions]` — `[string]`: **Allowed values:** `version`, `state`, `leaderboardSet`, `localizations`
- `fields[gameCenterLeaderboardSets]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `gameCenterDetail`, `gameCenterGroup`, `gameCenterLeaderboards`, `versions`
- `fields[gameCenterLeaderboards]` — `[string]`: **Allowed values:** `defaultFormatter`, `referenceName`, `vendorIdentifier`, `submissionType`, `scoreSortType`, `scoreRangeStart`, `scoreRangeEnd`, `recurrenceStartDate`, `recurrenceDuration`, `recurrenceRule`, `archived`, `activityProperties`, `visibility`, `gameCenterDetail`, `gameCenterGroup`, `gameCenterLeaderboardSets`, `activity`, `challenge`, `versions`
- `filter[id]` — `[string]`:
- `filter[referenceName]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `gameCenterDetail`, `gameCenterGroup`, `gameCenterLeaderboards`, `versions`
- `limit` — `integer`: **Maximum:** `200`
- `limit[gameCenterLeaderboards]` — `integer`: **Maximum:** `50`
- `limit[versions]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterLeaderboardSetsV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- fields\[gameCenterDetails\]:
- fields\[gameCenterGroups\]:
- fields\[gameCenterLeaderboardSetVersions\]:
- fields\[gameCenterLeaderboardSets\]:
- fields\[gameCenterLeaderboards\]:
- filter\[id\]:
- filter\[referenceName\]:
- include:
- limit:
- limit\[gameCenterLeaderboards\]:
- limit\[versions\]:
- 200:
- 400:
- 401:
- 403:
- 404:
- 429:

## See Also

### Reading and editing leaderboard sets in a Game Center detail

- [Get All Leaderboard Set IDs for a Game Center Detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsetsv2.md): Get a list of leaderboard set resource IDs for a specific Game Center detail.
- [Get leaderboard sets information](get-v1-gamecenterdetails-_id_-gamecenterleaderboardsets.md): Deprecated. Get all leaderboard sets and related information for a Game Center detail.
- [List Leaderboard Sets](get-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsets.md): Deprecated. List all leaderboards for a Game Center detail.
- [Get leaderboard set releases information](get-v1-gamecenterdetails-_id_-leaderboardsetreleases.md): Deprecated. List all leaderboard set releases for a Game Center detail.
- [List leaderboard set release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-leaderboardsetreleases.md): Deprecated.
