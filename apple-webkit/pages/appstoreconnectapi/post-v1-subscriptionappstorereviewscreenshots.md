> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptionappstorereviewscreenshots](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptionappstorereviewscreenshots)

# Create a review screenshot for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Reserve a review screenshot for an auto-renewable subscription.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionAppStoreReviewScreenshots
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionAppStoreReviewScreenshotCreateRequest`

## Response Codes

- `201` Created — `SubscriptionAppStoreReviewScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)

## See Also

### Endpoints

- [Read subscription review screenshot information](get-v1-subscriptionappstorereviewscreenshots-_id_.md): Get the information about a review screenshot for an auto-renewable subscription.
- [Commit a review screenshot for an auto-renewable subscription](patch-v1-subscriptionappstorereviewscreenshots-_id_.md): Commit an uploaded image asset as a review screenshot for an auto-renewable subscription.
- [Delete a review screenshot for an auto-renewable subscription](delete-v1-subscriptionappstorereviewscreenshots-_id_.md): Delete an image that you uploaded for review of an auto-renewable subscription.
