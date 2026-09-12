> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionimageresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionimageresponse)

# SubscriptionImageResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+ (deprecated in 4.4.1)

A response containing a single subscription product image.

> This object is deprecated. Use [SubscriptionImageV2Response](subscriptionimagev2response.md) instead.

## Declaration

```
object SubscriptionImageResponse
```

## Properties

- `data` — `SubscriptionImage` (required):
- `included` — `[Subscription]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [SubscriptionImage](subscriptionimage.md): Deprecated. An image used to represent a subscription product on the App Store product page.
- [SubscriptionImageCreateRequest](subscriptionimagecreaterequest.md): Deprecated. The request body you use to create a subscription purchase image reservation.
- [SubscriptionImagesResponse](subscriptionimagesresponse.md): Deprecated. A response containing a list of images for a subscription product.
- [SubscriptionImageUpdateRequest](subscriptionimageupdaterequest.md): Deprecated. The request body for updating the upload status or content of a subscription product image.
- [SubscriptionImagesLinkagesResponse](subscriptionimageslinkagesresponse.md)
