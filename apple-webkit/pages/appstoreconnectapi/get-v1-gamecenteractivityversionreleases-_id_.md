> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenteractivityversionreleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenteractivityversionreleases-_id_)

# Read Activity Version Release Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get information for a specific Game Center activity version release.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterActivityVersionReleases/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterActivityVersionReleases]` — `[string]`: **Allowed values:** `version`
- `include` — `[string]`: **Allowed values:** `version`
- `fields[gameCenterActivityVersions]` — `[string]`: **Allowed values:** `version`, `state`, `fallbackUrl`, `activity`, `localizations`, `defaultImage`, `releases`

## Response Codes

- `200` OK — `GameCenterActivityVersionReleaseResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Read, create, and update Game Center activity versions

- [Add an Activity Version Release](post-v1-gamecenteractivityversionreleases.md): Deprecated. Add a version release for a specific Game Center activity.
- [Delete an Activity Version Release](delete-v1-gamecenteractivityversionreleases-_id_.md): Deprecated. Remove a specific version release from a Game Center activity.
