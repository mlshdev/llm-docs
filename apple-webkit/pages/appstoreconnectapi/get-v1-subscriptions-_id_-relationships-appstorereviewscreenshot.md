> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-appstorereviewscreenshot](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-appstorereviewscreenshot)

# Get the App Store review screenshot ID for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/relationships/appStoreReviewScreenshot
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `SubscriptionAppStoreReviewScreenshotLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting the App Store review screenshot

- [Read review screenshot information for a subscription](get-v1-subscriptions-_id_-appstorereviewscreenshot.md): Get information about review screenshot for a specific auto-renewable subscription.
