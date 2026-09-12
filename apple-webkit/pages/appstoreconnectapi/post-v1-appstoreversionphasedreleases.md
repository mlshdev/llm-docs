> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appstoreversionphasedreleases](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appstoreversionphasedreleases)

# Create an app store version phased release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Enable phased release for an App Store version.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appStoreVersionPhasedReleases
```

## HTTP Body

Content type: `application/json`

Type: `AppStoreVersionPhasedReleaseCreateRequest`

## Response Codes

- `201` Created — `AppStoreVersionPhasedReleaseResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Phased Releases

- [Modify an app store version phased release](patch-v1-appstoreversionphasedreleases-_id_.md): Pause or resume a phased release, or immediately release an app.
