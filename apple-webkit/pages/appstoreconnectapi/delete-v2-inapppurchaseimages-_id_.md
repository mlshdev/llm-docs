> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v2-inapppurchaseimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v2-inapppurchaseimages-_id_)

# Delete an in-app purchase image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Delete an in-app purchase image configured with the v2 API.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v2/inAppPurchaseImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `204` No Content:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Working with in-app purchase versions](working-with-in-app-purchase-versions.md)

## See Also

### Endpoints

- [Create an in-app purchase image](post-v2-inapppurchaseimages.md): Reserve a promotion image for an in-app purchase configured with the v2 API and prepare its asset upload.
- [Read in-app purchase image information](get-v2-inapppurchaseimages-_id_.md): Get the metadata for an in-app purchase image configured with the v2 API, including the asset upload state.
- [Modify an in-app purchase image](patch-v2-inapppurchaseimages-_id_.md): Commit the asset upload for an in-app purchase image configured with the v2 API.
