> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appstoreversionphasedreleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appstoreversionphasedreleases-_id_)

# Modify an app store version phased release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Pause or resume a phased release, or immediately release an app.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appStoreVersionPhasedReleases/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `AppStoreVersionPhasedReleaseUpdateRequest`

## Response Codes

- `200` OK — `AppStoreVersionPhasedReleaseResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Phased Releases

- [Create an app store version phased release](post-v1-appstoreversionphasedreleases.md): Enable phased release for an App Store version.
