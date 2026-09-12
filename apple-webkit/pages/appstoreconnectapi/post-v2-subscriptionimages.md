> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-subscriptionimages](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-subscriptionimages)

# Create a subscription image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Reserve a promotion image for an auto-renewable subscription configured with the v2 API and prepare its asset upload.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/subscriptionImages
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionImageV2CreateRequest`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `201` Created — `SubscriptionImageV2Response`:
- `409` Conflict — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)
- [Working with subscription versions](working-with-subscription-versions.md)

## See Also

### Endpoints

- [Read subscription image information](get-v2-subscriptionimages-_id_.md): Get the metadata for a subscription image configured with the v2 API, including the asset upload state.
- [Modify a subscription image](patch-v2-subscriptionimages-_id_.md): Commit the asset upload for a subscription image configured with the v2 API.
- [Delete a subscription image](delete-v2-subscriptionimages-_id_.md): Delete a subscription image configured with the v2 API.
