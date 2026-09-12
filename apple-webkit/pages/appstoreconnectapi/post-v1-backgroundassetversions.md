> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-backgroundassetversions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-backgroundassetversions)

# Create Asset Pack Version Record

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Create an asset pack version record for your Apple-hosted background assets.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/backgroundAssetVersions
```

## HTTP Body

Content type: `application/json`

Type: `BackgroundAssetVersionCreateRequest`

## Response Codes

- `201` Created — `BackgroundAssetVersionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Uploading and versioning Apple hosted background assets](managing-apple-hosted-background-assets.md)

## See Also

### Relating background assets to your app

- [Create Asset Pack Record](post-v1-backgroundassets.md): Create an asset pack record for your Apple-hosted background assets.
