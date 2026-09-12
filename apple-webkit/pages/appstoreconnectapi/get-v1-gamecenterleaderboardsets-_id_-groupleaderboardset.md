> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterleaderboardsets-_id_-groupleaderboardset](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterleaderboardsets-_id_-groupleaderboardset)

# List Leaderboard Sets in a Group Leaderboard Set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

List information about leaderboards and leaderboard sets in a group leaderboard set.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardSets/{id}/groupLeaderboardSet
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `fields[gameCenterGroups]` — `[string]`: **Allowed values:** `referenceName`, `gameCenterDetails`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`
- `fields[gameCenterLeaderboardSetLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `gameCenterLeaderboardSet`, `gameCenterLeaderboardSetImage`
- `fields[gameCenterLeaderboardSetReleases]` — `[string]`: **Allowed values:** `live`, `gameCenterDetail`, `gameCenterLeaderboardSet`
- `fields[gameCenterLeaderboardSets]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboardSet`, `localizations`, `gameCenterLeaderboards`, `releases`
- `fields[gameCenterLeaderboards]` — `[string]`: **Allowed values:** `defaultFormatter`, `referenceName`, `vendorIdentifier`, `submissionType`, `scoreSortType`, `scoreRangeStart`, `scoreRangeEnd`, `recurrenceStartDate`, `recurrenceDuration`, `recurrenceRule`, `archived`, `activityProperties`, `visibility`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboard`, `gameCenterLeaderboardSets`, `localizations`, `releases`, `activity`, `challenge`
- `include` — `[string]`: **Allowed values:** `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboardSet`, `localizations`, `gameCenterLeaderboards`, `releases`
- `limit[gameCenterLeaderboards]` — `integer`: **Maximum:** `50`
- `limit[localizations]` — `integer`: **Maximum:** `50`
- `limit[releases]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterLeaderboardSetResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading leaderboard sets

- [Read Game Center Leaderboard Set Information](get-v2-gamecenterleaderboardsets-_id_.md): Get information about a specific Game Center leaderboard set.
- [List All Leaderboards for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-gamecenterleaderboards.md): Get a list of leaderboards for a specific Game Center leaderboard set.
- [Get All Leaderboard IDs for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Get a list of leaderboard resource IDs for a specific Game Center leaderboard set.
- [List All Versions for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-versions.md): Get a list of versions for a specific Game Center leaderboard set.
- [Get All Version IDs for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-relationships-versions.md): Get a list of version resource IDs for a specific Game Center leaderboard set.
- [Read Leaderboard Set Information](get-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Read information about a specific leaderboard set.
- [List Leaderboard Information for a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-gamecenterleaderboards.md): Deprecated. Read the leadboards that belong to a learderboard set.
- [List All Localizations for a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-localizations.md): Deprecated. Get a list of localized metadata for a leaderboard set.
- [List localization IDs for a Game Center leaderboard set](get-v1-gamecenterleaderboardsets-_id_-relationships-localizations.md): Deprecated.
- [Read the Leaderboards in a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. List all leaderboards in a leaderboard set.
- [Read the Group Leaderboard Set in a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-relationships-groupleaderboardset.md): Deprecated. List all the group leaderboard sets in a leaderboard set.
- [List Releases for a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-releases.md): Deprecated. Read the state of releases for a leaderboard set and related information.
- [List release IDs for a Game Center leaderboard set](get-v1-gamecenterleaderboardsets-_id_-relationships-releases.md): Deprecated.
