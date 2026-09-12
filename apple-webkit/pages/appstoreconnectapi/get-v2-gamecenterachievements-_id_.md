> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-gamecenterachievements-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-gamecenterachievements-_id_)

# Read Game Center Achievement Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get information about a specific Game Center achievement.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/gameCenterAchievements/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterAchievementVersions]` — `[string]`: **Allowed values:** `version`, `state`, `achievement`, `localizations`
- `fields[gameCenterAchievements]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `points`, `showBeforeEarned`, `repeatable`, `archived`, `activityProperties`, `gameCenterDetail`, `gameCenterGroup`, `activity`, `versions`
- `fields[gameCenterActivities]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `playStyle`, `minimumPlayersCount`, `maximumPlayersCount`, `supportsPartyCode`, `archived`, `properties`, `gameCenterDetail`, `gameCenterGroup`, `achievements`, `achievementsV2`, `leaderboards`, `leaderboardsV2`, `versions`
- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `fields[gameCenterGroups]` — `[string]`: **Allowed values:** `referenceName`, `gameCenterDetails`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`
- `include` — `[string]`: **Allowed values:** `gameCenterDetail`, `gameCenterGroup`, `activity`, `versions`
- `limit[versions]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterAchievementV2Response`:
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
- include:
- limit\[versions\]:
- 200:
- 400:
- 401:
- 403:
- 404:
- 429:

## See Also

### Reading achievements

- [List All Versions for a Game Center Achievement](get-v2-gamecenterachievements-_id_-versions.md): Get a list of versions for a specific Game Center achievement.
- [Get All Version IDs for a Game Center Achievement](get-v2-gamecenterachievements-_id_-relationships-versions.md): Get a list of version resource IDs for a specific Game Center achievement.
- [List All Achievements](get-v1-gamecenterdetails-_id_-gamecenterachievements.md): Deprecated. List all achievement information for a Game Center detail.
- [Read Achievement Information](get-v1-gamecenterachievements-_id_.md): Deprecated. Read information about a specific Game Center achievement.
- [List All Localizations for an Achievement](get-v1-gamecenterachievements-_id_-localizations.md): Deprecated. Read information about the release for specific achievement.
- [Read Release Information for an Achievement](get-v1-gamecenterachievements-_id_-releases.md): Deprecated. Read the state of an achievement release and related information.
- [List release IDs for a Game Center achievement](get-v1-gamecenterachievements-_id_-relationships-releases.md): Deprecated.
- [List Associated Group Achievement Information for an Achievement](get-v1-gamecenterachievements-_id_-groupachievement.md): Deprecated. Read information about the group for specific achievement.
- [List Group Achievements for an Achievement](get-v1-gamecenterachievements-_id_-relationships-groupachievement.md): Deprecated. List associated group achievements for a specific achievement.
- [List achievement releases](get-v1-gamecenterdetails-_id_-achievementreleases.md): Deprecated. Read information about the achievement releases for specific Game Center detail.
- [List achievement release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-achievementreleases.md): Deprecated.
