> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenteractivityversions-_id_-relationships-localizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenteractivityversions-_id_-relationships-localizations)

# List localization IDs for a Game Center activity version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterActivityVersions/{id}/relationships/localizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterActivityVersionLocalizationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Read, create, and update Game Center activity versions

- [Read the Versions for an Activity](get-v1-gamecenteractivities-_id_-versions.md): Get a list of versions for a specific Game Center activity.
- [List version IDs for a Game Center activity](get-v1-gamecenteractivities-_id_-relationships-versions.md)
- [Read Activity Version Information](get-v1-gamecenteractivityversions-_id_.md): Get information for a specific Game Center activity version.
- [Read Default Image Information for an Activity Version](get-v1-gamecenteractivityversions-_id_-defaultimage.md): Get details about the default image for a specific Game Center activity version.
- [Get the default image ID for a Game Center activity version](get-v1-gamecenteractivityversions-_id_-relationships-defaultimage.md)
- [List All Localizations for an Activity Version](get-v1-gamecenteractivityversions-_id_-localizations.md): Get details about the default localization for a specific Game Center activity version.
- [Add an Activity Version Release](post-v1-gamecenteractivityversionreleases.md): Deprecated. Add a version release for a specific Game Center activity.
- [Create an Activity Version](post-v1-gamecenteractivityversions.md): Add an activity to a Game Center detail, group, or leaderboard.
- [Modify an Activity Version](patch-v1-gamecenteractivityversions-_id_.md): Update a specific activity version.
