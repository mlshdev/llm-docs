> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-subscriptionappstorereviewscreenshots-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-subscriptionappstorereviewscreenshots-_id_)

# Delete a review screenshot for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Delete an image that you uploaded for review of an auto-renewable subscription.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/subscriptionAppStoreReviewScreenshots/{id}
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

- [Read subscription review screenshot information](get-v1-subscriptionappstorereviewscreenshots-_id_.md): Get the information about a review screenshot for an auto-renewable subscription.
- [Create a review screenshot for an auto-renewable subscription](post-v1-subscriptionappstorereviewscreenshots.md): Reserve a review screenshot for an auto-renewable subscription.
- [Commit a review screenshot for an auto-renewable subscription](patch-v1-subscriptionappstorereviewscreenshots-_id_.md): Commit an uploaded image asset as a review screenshot for an auto-renewable subscription.
