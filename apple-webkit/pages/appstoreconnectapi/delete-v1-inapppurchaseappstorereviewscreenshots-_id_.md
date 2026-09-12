> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-inapppurchaseappstorereviewscreenshots-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-inapppurchaseappstorereviewscreenshots-_id_)

# Delete a review screenshot for an in-app purchase

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Delete an image that you uploaded for review of an in-app purchase.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/inAppPurchaseAppStoreReviewScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read in-app purchase review screenshot information](get-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Get information about a specific review screenshot for an in-app purchase.
- [Create an in-app purchase review screenshot](post-v1-inapppurchaseappstorereviewscreenshots.md): Reserve a review screenshot for an in-app purchase.
- [Commit a review screenshot for an in-app purchase](patch-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Commit an uploaded image asset as a review screenshot for an in-app purchase.
