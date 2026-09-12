> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-gamecentergroup](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-gamecentergroup)

# Read the groups in a game center detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Get a list of groups in a Game Center detail.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/gameCenterGroup
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterAchievements]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `points`, `showBeforeEarned`, `repeatable`, `archived`, `activityProperties`, `gameCenterDetail`, `gameCenterGroup`, `groupAchievement`, `localizations`, `releases`, `activity`, `versions`
- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `fields[gameCenterGroups]` — `[string]`: **Allowed values:** `referenceName`, `gameCenterDetails`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`
- `fields[gameCenterLeaderboardSets]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboardSet`, `localizations`, `gameCenterLeaderboards`, `releases`, `versions`
- `fields[gameCenterLeaderboards]` — `[string]`: **Allowed values:** `defaultFormatter`, `referenceName`, `vendorIdentifier`, `submissionType`, `scoreSortType`, `scoreRangeStart`, `scoreRangeEnd`, `recurrenceStartDate`, `recurrenceDuration`, `recurrenceRule`, `archived`, `activityProperties`, `visibility`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboard`, `gameCenterLeaderboardSets`, `localizations`, `releases`, `activity`, `challenge`, `versions`
- `include` — `[string]`: **Allowed values:** `gameCenterDetails`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`
- `limit[gameCenterAchievements]` — `integer`: **Maximum:** `50`
- `limit[gameCenterDetails]` — `integer`: **Maximum:** `50`
- `limit[gameCenterLeaderboardSets]` — `integer`: **Maximum:** `50`
- `limit[gameCenterLeaderboards]` — `integer`: **Maximum:** `50`
- `fields[gameCenterActivities]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `playStyle`, `minimumPlayersCount`, `maximumPlayersCount`, `supportsPartyCode`, `archived`, `properties`, `gameCenterDetail`, `gameCenterGroup`, `achievements`, `achievementsV2`, `leaderboards`, `leaderboardsV2`, `versions`
- `fields[gameCenterChallenges]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `archived`, `challengeType`, `repeatable`, `gameCenterDetail`, `gameCenterGroup`, `versions`, `leaderboard`, `leaderboardV2`
- `limit[gameCenterAchievementsV2]` — `integer`: **Maximum:** `50`
- `limit[gameCenterActivities]` — `integer`: **Maximum:** `50`
- `limit[gameCenterChallenges]` — `integer`: **Maximum:** `50`
- `limit[gameCenterLeaderboardSetsV2]` — `integer`: **Maximum:** `50`
- `limit[gameCenterLeaderboardsV2]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterGroupResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Game Center details

- [Read the state of game center for an app](get-v1-apps-_id_-gamecenterdetail.md): Get Game Center detail information for an app.
- [Read game center details](get-v1-gamecenterdetails-_id_.md): Read a specific Game Center detail and related information.
- [Read app versions for a game center detail](get-v1-gamecenterdetails-_id_-gamecenterappversions.md): Get a list of app versions for a Game Center detail.
- [List Game Center app version IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterappversions.md)
- [Get the Game Center group ID for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-gamecentergroup.md)
- [Read the challenges for a game center detail](get-v1-gamecenterdetails-_id_-gamecenterchallenges.md): Get challenge information for a specific Game Center detail.
- [Read challenge ids for a game center detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterchallenges.md): List all the challenge IDs for a specific Game Center detail.
