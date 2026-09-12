> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-backgroundassetuploadfiles-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-backgroundassetuploadfiles-_id_)

# Commit an Uploaded Asset Pack to a Background Asset Version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Associate an uploaded asset pack with a background asset version to finish the upload process.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/backgroundAssetUploadFiles/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `backgroundAssetUploadFiles` resource ID from the [Read Background Asset Upload File Information for a Background Asset Version](get-v1-backgroundassetversions-_id_-backgroundassetuploadfiles.md) response.

## HTTP Body

Content type: `application/json`

Type: `BackgroundAssetUploadFileUpdateRequest`

## Response Codes

- `200` OK — `BackgroundAssetUploadFileResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.1 release notes](app-store-connect-api-4-1-release-notes.md)
- [Uploading and versioning Apple hosted background assets](managing-apple-hosted-background-assets.md)

## See Also

### Uploading background asset files

- [Read Information for an Uploaded Asset Pack](get-v1-backgroundassetuploadfiles-_id_.md): Get details about an uploaded asset pack for Apple hosted background asset.
- [Create a Reservation for an Asset Pack Upload](post-v1-backgroundassetuploadfiles.md): Begin the process of uploading an asset pack for Apple-hosted background assets.
