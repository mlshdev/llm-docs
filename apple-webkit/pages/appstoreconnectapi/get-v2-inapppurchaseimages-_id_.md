> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v2-inapppurchaseimages-_id_

# Read In-App Purchase image information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Get the metadata for an In-App Purchase image configured with the v2 API, including the asset upload state.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/inAppPurchaseImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[inAppPurchaseImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `assetToken`, `imageAsset`, `uploadOperations`, `assetDeliveryState`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `200` OK — `InAppPurchaseImageV2Response`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Working with In-App Purchase versions](working-with-in-app-purchase-versions.md)

## See Also

### Endpoints

- [Create an In-App Purchase image](post-v2-inapppurchaseimages.md): Reserve a promotion image for an In-App Purchase configured with the v2 API and prepare its asset upload.
- [Modify an In-App Purchase image](patch-v2-inapppurchaseimages-_id_.md): Commit the asset upload for an In-App Purchase image configured with the v2 API.
- [Delete an In-App Purchase image](delete-v2-inapppurchaseimages-_id_.md): Delete an In-App Purchase image configured with the v2 API.
