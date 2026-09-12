> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-activityreleases](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-activityreleases)

# Get activity releases for a game center detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

List all activity release information for a specific Game Center detail.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/activityReleases
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterActivityVersionReleases]` — `[string]`: **Allowed values:** `version`
- `fields[gameCenterActivityVersions]` — `[string]`: **Allowed values:** `version`, `state`, `fallbackUrl`, `activity`, `localizations`, `defaultImage`, `releases`
- `include` — `[string]`: **Allowed values:** `version`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterActivityVersionReleasesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring Game center activities](configuring-game-center-activities.md)

## See Also

### Reading Game center activity information

- [Get activity release ids for a game center detail](get-v1-gamecenterdetails-_id_-relationships-activityreleases.md): Deprecated. List all activity release IDs for a specific Game Center detail.
