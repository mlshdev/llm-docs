> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongrouplocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongrouplocalizationresponse)

# SubscriptionGroupLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The response body for endpoints that create, read, or modify a single subscription group localization.

> This object is deprecated. Use [SubscriptionGroupLocalizationV2Response](subscriptiongrouplocalizationv2response.md) instead.

## Declaration

```
object SubscriptionGroupLocalizationResponse
```

## Properties

- `data` — `SubscriptionGroupLocalization` (required):
- `included` — `[SubscriptionGroup]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [SubscriptionGroupLocalization](subscriptiongrouplocalization.md): Deprecated. The localized display name and optional custom app name for a subscription group, shown to customers on the App Store.
- [SubscriptionGroupLocalizationCreateRequest](subscriptiongrouplocalizationcreaterequest.md): Deprecated. The request body you use to create a subscription group localization.
- [SubscriptionGroupLocalizationUpdateRequest](subscriptiongrouplocalizationupdaterequest.md): Deprecated. The request body you use to update a subscription group localization update request.
