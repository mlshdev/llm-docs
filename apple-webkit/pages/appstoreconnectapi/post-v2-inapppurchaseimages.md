> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-inapppurchaseimages](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-inapppurchaseimages)

# Create an in-app purchase image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Reserve a promotion image for an in-app purchase configured with the v2 API and prepare its asset upload.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/inAppPurchaseImages
```

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseImageV2CreateRequest`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `201` Created — `InAppPurchaseImageV2Response`:
- `409` Conflict — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Working with in-app purchase versions](working-with-in-app-purchase-versions.md)

## See Also

### Endpoints

- [Read in-app purchase image information](get-v2-inapppurchaseimages-_id_.md): Get the metadata for an in-app purchase image configured with the v2 API, including the asset upload state.
- [Modify an in-app purchase image](patch-v2-inapppurchaseimages-_id_.md): Commit the asset upload for an in-app purchase image configured with the v2 API.
- [Delete an in-app purchase image](delete-v2-inapppurchaseimages-_id_.md): Delete an in-app purchase image configured with the v2 API.
