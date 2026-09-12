> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenteractivityversionreleases](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenteractivityversionreleases)

# Add an Activity Version Release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Add a version release for a specific Game Center activity.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterActivityVersionReleases
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterActivityVersionReleaseCreateRequest`

## Response Codes

- `201` Created — `GameCenterActivityVersionReleaseResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring Game center activities](configuring-game-center-activities.md)

## See Also

### Read, create, and update Game Center activity versions

- [Read Activity Version Release Information](get-v1-gamecenteractivityversionreleases-_id_.md): Deprecated. Get information for a specific Game Center activity version release.
- [Delete an Activity Version Release](delete-v1-gamecenteractivityversionreleases-_id_.md): Deprecated. Remove a specific version release from a Game Center activity.
