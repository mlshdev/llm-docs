> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptionappstorereviewscreenshots-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptionappstorereviewscreenshots-_id_)

# Commit a review screenshot for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Commit an uploaded image asset as a review screenshot for an auto-renewable subscription.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptionAppStoreReviewScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionAppStoreReviewScreenshotUpdateRequest`

## Response Codes

- `200` OK — `SubscriptionAppStoreReviewScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)

## See Also

### Endpoints

- [Read subscription review screenshot information](get-v1-subscriptionappstorereviewscreenshots-_id_.md): Get the information about a review screenshot for an auto-renewable subscription.
- [Create a review screenshot for an auto-renewable subscription](post-v1-subscriptionappstorereviewscreenshots.md): Reserve a review screenshot for an auto-renewable subscription.
- [Delete a review screenshot for an auto-renewable subscription](delete-v1-subscriptionappstorereviewscreenshots-_id_.md): Delete an image that you uploaded for review of an auto-renewable subscription.
