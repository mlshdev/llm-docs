> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenteractivities-_id_-versions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenteractivities-_id_-versions)

# Read the Versions for an Activity

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of versions for a specific Game Center activity.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterActivities/{id}/versions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterActivities]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `playStyle`, `minimumPlayersCount`, `maximumPlayersCount`, `supportsPartyCode`, `archived`, `properties`, `gameCenterDetail`, `gameCenterGroup`, `achievements`, `achievementsV2`, `leaderboards`, `leaderboardsV2`, `versions`
- `fields[gameCenterActivityImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `uploadOperations`, `assetDeliveryState`
- `fields[gameCenterActivityLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `description`, `version`, `image`
- `fields[gameCenterActivityVersionReleases]` — `[string]`: **Allowed values:** `version`
- `fields[gameCenterActivityVersions]` — `[string]`: **Allowed values:** `version`, `state`, `fallbackUrl`, `activity`, `localizations`, `defaultImage`, `releases`
- `include` — `[string]`: **Allowed values:** `activity`, `localizations`, `defaultImage`, `releases`
- `limit` — `integer`: **Maximum:** `200`
- `limit[localizations]` — `integer`: **Maximum:** `50`
- `limit[releases]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterActivityVersionsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Game Center activities

- [Create an Activity](post-v1-gamecenteractivities.md): Create an activity for your Game Center detail or Game Center group.
- [Add an Achievement to a Game Center Activity](post-v1-gamecenteractivities-_id_-relationships-achievementsv2.md): Add an achievement to a Game Center activity.
- [Add a Leaderboard to a Game Center Activity](post-v1-gamecenteractivities-_id_-relationships-leaderboardsv2.md): Add a leaderboard to a Game Center activity.
- [Modify the achievements for a game center activity](post-v1-gamecenteractivities-_id_-relationships-achievements.md): Deprecated. Update the relationship between achievements and a specific Game Center activity.
- [Modify the leaderboards for a game center activity](post-v1-gamecenteractivities-_id_-relationships-leaderboards.md): Deprecated. Update the relationship between a leaderboard and a specific Game Center activity.
- [Read Activity Information](get-v1-gamecenteractivities-_id_.md): Get information for a specific Game Center activity.
- [List version IDs for a Game Center activity](get-v1-gamecenteractivities-_id_-relationships-versions.md)
- [List all activities for a game center detail](get-v1-gamecenterdetails-_id_-gamecenteractivities.md): Get activity release information for a specific Game Center detail.
- [List Game Center activity IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-gamecenteractivities.md)
- [List all activities for a game center group](get-v1-gamecentergroups-_id_-gamecenteractivities.md): Get a list of all activities for a Game Center group.
- [List activity IDs for a Game Center group](get-v1-gamecentergroups-_id_-relationships-gamecenteractivities.md): Get a list of activity IDs for a specific Game Center group.
- [Modify an Activity](patch-v1-gamecenteractivities-_id_.md): Update details for a specific Game Center activity.
- [Delete an Activity](delete-v1-gamecenteractivities-_id_.md): Remove a specific Game Center activity.
- [Remove an Achievement](delete-v1-gamecenteractivities-_id_-relationships-achievementsv2.md): Remove an achievement from a Game Center activity.
- [Remove a Leaderboard](delete-v1-gamecenteractivities-_id_-relationships-leaderboardsv2.md): Remove a leaderboard from a Game Center activity.
