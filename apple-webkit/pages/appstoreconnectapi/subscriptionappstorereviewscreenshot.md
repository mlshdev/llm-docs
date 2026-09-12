> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionappstorereviewscreenshot](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionappstorereviewscreenshot)

# SubscriptionAppStoreReviewScreenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A screenshot of the subscription paywall submitted alongside a subscription for App Store review.

## Declaration

```
object SubscriptionAppStoreReviewScreenshot
```

## Properties

- `attributes` — `SubscriptionAppStoreReviewScreenshot.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `SubscriptionAppStoreReviewScreenshot.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionAppStoreReviewScreenshots`

## Topics

### Objects

- [SubscriptionAppStoreReviewScreenshot.Attributes](subscriptionappstorereviewscreenshot/attributes-data.dictionary.md): Attributes that describe a subscription app store review screenshot resource.
- [SubscriptionAppStoreReviewScreenshot.Relationships](subscriptionappstorereviewscreenshot/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionAppStoreReviewScreenshotCreateRequest](subscriptionappstorereviewscreenshotcreaterequest.md): The request body you use to create a subscription App Store review screenshot.
- [SubscriptionAppStoreReviewScreenshotResponse](subscriptionappstorereviewscreenshotresponse.md): A response containing a single App Store review screenshot for a subscription.
- [SubscriptionAppStoreReviewScreenshotUpdateRequest](subscriptionappstorereviewscreenshotupdaterequest.md): The request body you use to update a subscription app store review screenshot update request.
