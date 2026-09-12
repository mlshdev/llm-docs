> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-backgroundassetuploadfiles](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-backgroundassetuploadfiles)

# Create a Reservation for an Asset Pack Upload

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Begin the process of uploading an asset pack for Apple-hosted background assets.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/backgroundAssetUploadFiles
```

## HTTP Body

Content type: `application/json`

Type: `BackgroundAssetUploadFileCreateRequest`

## Response Codes

- `201` Created — `BackgroundAssetUploadFileResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Uploading and versioning Apple hosted background assets](managing-apple-hosted-background-assets.md)

## See Also

### Uploading background asset files

- [Read Information for an Uploaded Asset Pack](get-v1-backgroundassetuploadfiles-_id_.md): Get details about an uploaded asset pack for Apple hosted background asset.
- [Commit an Uploaded Asset Pack to a Background Asset Version](patch-v1-backgroundassetuploadfiles-_id_.md): Associate an uploaded asset pack with a background asset version to finish the upload process.
