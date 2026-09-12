> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-gamecenterachievementsv2](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-gamecenterachievementsv2)

# List All Game Center Achievements for a Game Center Detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get a list of achievements for a specific Game Center detail.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/gameCenterAchievementsV2
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterAchievementVersions]` — `[string]`: **Allowed values:** `version`, `state`, `achievement`, `localizations`
- `fields[gameCenterAchievements]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `points`, `showBeforeEarned`, `repeatable`, `archived`, `activityProperties`, `gameCenterDetail`, `gameCenterGroup`, `activity`, `versions`
- `fields[gameCenterActivities]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `playStyle`, `minimumPlayersCount`, `maximumPlayersCount`, `supportsPartyCode`, `archived`, `properties`, `gameCenterDetail`, `gameCenterGroup`, `achievements`, `achievementsV2`, `leaderboards`, `leaderboardsV2`, `versions`
- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `fields[gameCenterGroups]` — `[string]`: **Allowed values:** `referenceName`, `gameCenterDetails`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`
- `filter[archived]` — `[string]`:
- `filter[id]` — `[string]`:
- `filter[referenceName]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `gameCenterDetail`, `gameCenterGroup`, `activity`, `versions`
- `limit` — `integer`: **Maximum:** `200`
- `limit[versions]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterAchievementsV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- fields\[gameCenterAchievementVersions\]:
- fields\[gameCenterAchievements\]:
- fields\[gameCenterActivities\]:
- fields\[gameCenterDetails\]:
- fields\[gameCenterGroups\]:
- filter\[archived\]:
- filter\[id\]:
- filter\[referenceName\]:
- include:
- limit:
- limit\[versions\]:
- 200:
- 400:
- 401:
- 403:
- 404:
- 429:

## See Also

### Reading and editing Game Center detail achievements

- [Get All Achievement IDs for a Game Center Detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterachievementsv2.md): Get a list of achievement resource IDs for a specific Game Center detail.
- [List All Achievements](get-v1-gamecenterdetails-_id_-gamecenterachievements.md): Deprecated. List all achievement information for a Game Center detail.
- [List achievement releases](get-v1-gamecenterdetails-_id_-achievementreleases.md): Deprecated. Read information about the achievement releases for specific Game Center detail.
- [List achievement release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-achievementreleases.md): Deprecated.
- [List Achievements](get-v1-gamecenterdetails-_id_-relationships-gamecenterachievements.md): Deprecated. List the achievements for a Game Center detail.
- [Modify Associated Achievements](patch-v1-gamecenterdetails-_id_-relationships-gamecenterachievements.md): Deprecated. Modify the achievements for a Game Center detail.
