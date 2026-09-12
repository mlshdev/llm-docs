> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterleaderboardsetreleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterleaderboardsetreleases-_id_)

# Read Leaderboard Set Release Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Get information about a leaderboard set release.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardSetReleases/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterLeaderboardSetReleases]` — `[string]`: **Allowed values:** `live`, `gameCenterDetail`, `gameCenterLeaderboardSet`
- `include` — `[string]`: **Allowed values:** `gameCenterDetail`, `gameCenterLeaderboardSet`
- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `fields[gameCenterLeaderboardSets]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboardSet`, `localizations`, `gameCenterLeaderboards`, `releases`

## Response Codes

- `200` OK — `GameCenterLeaderboardSetReleaseResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing leaderboard set releases

- [Create a Leaderboard Set Release](post-v1-gamecenterleaderboardsetreleases.md): Deprecated. Add a new leaderboard set release.
- [Delete a Leaderboard Set Release](delete-v1-gamecenterleaderboardsetreleases-_id_.md): Deprecated. Delete a new leaderboard set release.
