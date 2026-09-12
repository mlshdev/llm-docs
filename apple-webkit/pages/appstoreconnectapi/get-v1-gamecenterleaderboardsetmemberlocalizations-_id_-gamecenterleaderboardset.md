> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-gamecenterleaderboardset](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-gamecenterleaderboardset)

# Read Leaderboard Set Information for a Leaderboard Set Member Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Get information about a leaderboard set for a specific leaderboard set member localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardSetMemberLocalizations/{id}/gameCenterLeaderboardSet
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

### Managing leaderboard set member localizations

- [Read Leaderboard Set Member Localization Information](get-v1-gamecenterleaderboardsetmemberlocalizations.md): Get information about leaderboard member set localizations.
- [Read Leaderboard Information for a Leaderboard Set Member Localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-gamecenterleaderboard.md): Deprecated. Get information about a leaderboard for a specific leaderboard set member localization.
- [Read the leaderboard id for a leaderboard set member localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-relationships-gamecenterleaderboard.md): Deprecated. Get the leaderboard ID for a specific leaderboard set member localization.
- [Get the leaderboard set ID for a Game Center leaderboard set member localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-relationships-gamecenterleaderboardset.md): Deprecated.
- [Create a Leaderboard Set Member Localization](post-v1-gamecenterleaderboardsetmemberlocalizations.md): Deprecated. Add a new leaderboard set localization.
- [Modify a Leaderboard Set Member Localization](patch-v1-gamecenterleaderboardsetmemberlocalizations-_id_.md): Deprecated. Edit a leaderboard set member localization.
- [Delete a Leaderboard Set Member Localization](delete-v1-gamecenterleaderboardsetmemberlocalizations-_id_.md): Delete a localization that’s associated with a leaderboard set member.
