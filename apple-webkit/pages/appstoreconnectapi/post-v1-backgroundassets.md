> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-backgroundassets](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-backgroundassets)

# Create Asset Pack Record

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Create an asset pack record for your Apple-hosted background assets.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/backgroundAssets
```

## HTTP Body

Content type: `application/json`

Type: `BackgroundAssetCreateRequest`

## Response Codes

- `201` Created — `BackgroundAssetResponse`:
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

- [Create Asset Pack Version Record](post-v1-backgroundassetversions.md): Create an asset pack version record for your Apple-hosted background assets.
