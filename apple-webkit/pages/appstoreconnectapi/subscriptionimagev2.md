> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionimagev2](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionimagev2)

# SubscriptionImageV2

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

A promotion image attached to an auto-renewable subscription configured with the v2 API.

## Declaration

```
object SubscriptionImageV2
```

## Properties

- `type` — `string` (required): **Allowed values:** `subscriptionImages`
- `id` — `string` (required):
- `attributes` — `SubscriptionImageV2.Attributes`:
- `links` — `ResourceLinks`:

## Topics

### Objects and types

- [SubscriptionImageV2.Attributes](subscriptionimagev2/attributes-data.dictionary.md): Attributes that describe a SubscriptionImageV2 resource.

## See Also

### Objects

- [SubscriptionImageV2CreateRequest](subscriptionimagev2createrequest.md): The request body you use to create a subscription image with the v2 API.
- [SubscriptionImageV2Response](subscriptionimagev2response.md): The response body for endpoints that create, read, or modify a subscription image with the v2 API.
- [SubscriptionImageV2UpdateRequest](subscriptionimagev2updaterequest.md): The request body you use to commit an upload for a subscription image with the v2 API.
- [SubscriptionImagesV2Response](subscriptionimagesv2response.md): The response body for endpoints that list subscription images configured with the v2 API.
