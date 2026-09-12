> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appstoreversionphasedreleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appstoreversionphasedreleases-_id_)

# Delete an app store version phased release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Cancel a planned phased release that has not been started.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appStoreVersionPhasedReleases/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:
