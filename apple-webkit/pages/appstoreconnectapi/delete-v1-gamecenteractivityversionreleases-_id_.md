> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenteractivityversionreleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenteractivityversionreleases-_id_)

# Delete an Activity Version Release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Remove a specific version release from a Game Center activity.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterActivityVersionReleases/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Read, create, and update Game Center activity versions

- [Read Activity Version Release Information](get-v1-gamecenteractivityversionreleases-_id_.md): Deprecated. Get information for a specific Game Center activity version release.
- [Add an Activity Version Release](post-v1-gamecenteractivityversionreleases.md): Deprecated. Add a version release for a specific Game Center activity.
