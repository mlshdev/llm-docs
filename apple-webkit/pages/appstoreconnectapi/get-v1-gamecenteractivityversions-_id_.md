> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenteractivityversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenteractivityversions-_id_)

# Read Activity Version Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get information for a specific Game Center activity version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterActivityVersions/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterActivityImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `uploadOperations`, `assetDeliveryState`
- `fields[gameCenterActivityLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `description`, `version`, `image`
- `fields[gameCenterActivityVersions]` — `[string]`: **Allowed values:** `version`, `state`, `fallbackUrl`, `activity`, `localizations`, `defaultImage`, `releases`
- `include` — `[string]`: **Allowed values:** `activity`, `localizations`, `defaultImage`, `releases`
- `limit[localizations]` — `integer`: **Maximum:** `50`
- `limit[releases]` — `integer`: **Maximum:** `50`
- `fields[gameCenterActivities]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `playStyle`, `minimumPlayersCount`, `maximumPlayersCount`, `supportsPartyCode`, `archived`, `properties`, `gameCenterDetail`, `gameCenterGroup`, `achievements`, `achievementsV2`, `leaderboards`, `leaderboardsV2`, `versions`
- `fields[gameCenterActivityVersionReleases]` — `[string]`: **Allowed values:** `version`

## Response Codes

- `200` OK — `GameCenterActivityVersionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Read, create, and update Game Center activity versions

- [Read the Versions for an Activity](get-v1-gamecenteractivities-_id_-versions.md): Get a list of versions for a specific Game Center activity.
- [List version IDs for a Game Center activity](get-v1-gamecenteractivities-_id_-relationships-versions.md)
- [Read Default Image Information for an Activity Version](get-v1-gamecenteractivityversions-_id_-defaultimage.md): Get details about the default image for a specific Game Center activity version.
- [Get the default image ID for a Game Center activity version](get-v1-gamecenteractivityversions-_id_-relationships-defaultimage.md)
- [List All Localizations for an Activity Version](get-v1-gamecenteractivityversions-_id_-localizations.md): Get details about the default localization for a specific Game Center activity version.
- [List localization IDs for a Game Center activity version](get-v1-gamecenteractivityversions-_id_-relationships-localizations.md)
- [Add an Activity Version Release](post-v1-gamecenteractivityversionreleases.md): Deprecated. Add a version release for a specific Game Center activity.
- [Create an Activity Version](post-v1-gamecenteractivityversions.md): Add an activity to a Game Center detail, group, or leaderboard.
- [Modify an Activity Version](patch-v1-gamecenteractivityversions-_id_.md): Update a specific activity version.
