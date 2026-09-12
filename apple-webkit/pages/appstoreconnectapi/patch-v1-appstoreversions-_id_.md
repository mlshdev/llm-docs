> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appstoreversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appstoreversions-_id_)

# Modify an app store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Update the App Store version for a specific app.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version resource ID from the [List all app store versions for an app](get-v1-apps-_id_-appstoreversions.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppStoreVersionUpdateRequest`

## Response Codes

- `200` OK — `AppStoreVersionResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.3 release notes](app-store-connect-api-3-3-release-notes.md)
- [Configuring alternative marketplaces and alternative marketplace apps](configuring-alternative-marketplaces-and-alternative-marketplace-apps.md)

## See Also

### Creating and Modifying App Store Versions

- [Create an app store version](post-v1-appstoreversions.md): Add a new App Store version or platform to an app.
- [Delete an app store version](delete-v1-appstoreversions-_id_.md): Delete an app store version that is associated with an app.
