> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionimage](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionimage)

# SubscriptionImage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+ (deprecated in 4.4.1)

An image used to represent a subscription product on the App Store product page.

> This object is deprecated. Use [SubscriptionImageV2](subscriptionimagev2.md) instead.

## Declaration

```
object SubscriptionImage
```

## Properties

- `attributes` — `SubscriptionImage.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `SubscriptionImage.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `subscriptionImages`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [SubscriptionImage.Attributes](subscriptionimage/attributes-data.dictionary.md): Deprecated. Attributes that describe a subscription image resource.
- [SubscriptionImage.Relationships](subscriptionimage/relationships-data.dictionary.md): Deprecated. The relationships for a subscription image, linking it to its associated subscription.

## See Also

### Objects

- [SubscriptionImageCreateRequest](subscriptionimagecreaterequest.md): Deprecated. The request body you use to create a subscription purchase image reservation.
- [SubscriptionImageResponse](subscriptionimageresponse.md): Deprecated. A response containing a single subscription product image.
- [SubscriptionImagesResponse](subscriptionimagesresponse.md): Deprecated. A response containing a list of images for a subscription product.
- [SubscriptionImageUpdateRequest](subscriptionimageupdaterequest.md): Deprecated. The request body for updating the upload status or content of a subscription product image.
- [SubscriptionImagesLinkagesResponse](subscriptionimageslinkagesresponse.md)
