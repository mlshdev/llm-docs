> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterleaderboards-_id_-groupleaderboard](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterleaderboards-_id_-groupleaderboard)

# Read Group Information for a Leaderboard

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Read the group leadboard to which a leaderboard belongs.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboards/{id}/groupLeaderboard
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the leaderboard resource ID from the [Get leaderboards information](get-v1-gamecenterdetails-_id_-gamecenterleaderboards.md) response.

## Query Parameters

- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `fields[gameCenterGroups]` — `[string]`: **Allowed values:** `referenceName`, `gameCenterDetails`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`
- `fields[gameCenterLeaderboardLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `formatterOverride`, `formatterSuffix`, `formatterSuffixSingular`, `description`, `gameCenterLeaderboard`, `gameCenterLeaderboardImage`
- `fields[gameCenterLeaderboardReleases]` — `[string]`: **Allowed values:** `live`, `gameCenterDetail`, `gameCenterLeaderboard`
- `fields[gameCenterLeaderboardSets]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboardSet`, `localizations`, `gameCenterLeaderboards`, `releases`
- `fields[gameCenterLeaderboards]` — `[string]`: **Allowed values:** `defaultFormatter`, `referenceName`, `vendorIdentifier`, `submissionType`, `scoreSortType`, `scoreRangeStart`, `scoreRangeEnd`, `recurrenceStartDate`, `recurrenceDuration`, `recurrenceRule`, `archived`, `activityProperties`, `visibility`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboard`, `gameCenterLeaderboardSets`, `localizations`, `releases`, `activity`, `challenge`
- `include` — `[string]`: **Allowed values:** `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboard`, `gameCenterLeaderboardSets`, `localizations`, `releases`, `activity`, `challenge`
- `limit[gameCenterLeaderboardSets]` — `integer`: **Maximum:** `50`
- `limit[localizations]` — `integer`: **Maximum:** `50`
- `limit[releases]` — `integer`: **Maximum:** `50`
- `fields[gameCenterActivities]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `playStyle`, `minimumPlayersCount`, `maximumPlayersCount`, `supportsPartyCode`, `archived`, `properties`, `gameCenterDetail`, `gameCenterGroup`, `achievements`, `achievementsV2`, `leaderboards`, `leaderboardsV2`, `versions`
- `fields[gameCenterChallenges]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `archived`, `challengeType`, `repeatable`, `gameCenterDetail`, `gameCenterGroup`, `versions`, `leaderboard`, `leaderboardV2`

## Response Codes

- `200` OK — `GameCenterLeaderboardResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading leaderboards

- [Read Game Center Leaderboard Information](get-v2-gamecenterleaderboards-_id_.md): Get information about a specific Game Center leaderboard.
- [List All Versions for a Game Center Leaderboard](get-v2-gamecenterleaderboards-_id_-versions.md): Get a list of versions for a specific Game Center leaderboard.
- [Get All Version IDs for a Game Center Leaderboard](get-v2-gamecenterleaderboards-_id_-relationships-versions.md): Get a list of version resource IDs for a specific Game Center leaderboard.
- [Read Leaderboard Information](get-v1-gamecenterleaderboards-_id_.md): Deprecated. Read information about a specific leaderboard.
- [List All Localizations for a Leaderboard](get-v1-gamecenterleaderboards-_id_-localizations.md): Deprecated. Get a list of localized metadata for a leaderboard.
- [List localization IDs for a Game Center leaderboard](get-v1-gamecenterleaderboards-_id_-relationships-localizations.md): Deprecated.
- [List all groups to which a leaderboard belongs](get-v1-gamecenterleaderboards-_id_-relationships-groupleaderboard.md): Deprecated. List associated group leaderboards for a specific leaderboard.
- [List Releases for a Leaderboard](get-v1-gamecenterleaderboards-_id_-releases.md): Deprecated. Read the state of releases for a leaderboard and related information.
- [List release IDs for a Game Center leaderboard](get-v1-gamecenterleaderboards-_id_-relationships-releases.md): Deprecated.
