> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/patch-v2-inapppurchaseimages-_id_

# Modify an In-App Purchase image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Commit the asset upload for an In-App Purchase image configured with the v2 API.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v2/inAppPurchaseImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseImageV2UpdateRequest`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `200` OK — `InAppPurchaseImageV2Response`:
- `409` Conflict — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Working with In-App Purchase versions](working-with-in-app-purchase-versions.md)

## See Also

### Endpoints

- [Create an In-App Purchase image](post-v2-inapppurchaseimages.md): Reserve a promotion image for an In-App Purchase configured with the v2 API and prepare its asset upload.
- [Read In-App Purchase image information](get-v2-inapppurchaseimages-_id_.md): Get the metadata for an In-App Purchase image configured with the v2 API, including the asset upload state.
- [Delete an In-App Purchase image](delete-v2-inapppurchaseimages-_id_.md): Delete an In-App Purchase image configured with the v2 API.
