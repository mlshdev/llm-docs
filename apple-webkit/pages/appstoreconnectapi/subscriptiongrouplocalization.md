> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongrouplocalization](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongrouplocalization)

# SubscriptionGroupLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The localized display name and optional custom app name for a subscription group, shown to customers on the App Store.

> This object is deprecated. Use [SubscriptionGroupLocalizationV2](subscriptiongrouplocalizationv2.md) instead.

## Declaration

```
object SubscriptionGroupLocalization
```

## Properties

- `attributes` — `SubscriptionGroupLocalization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `SubscriptionGroupLocalization.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionGroupLocalizations`

## Topics

### Objects

- [SubscriptionGroupLocalization.Attributes](subscriptiongrouplocalization/attributes-data.dictionary.md): Attributes that describe a subscription group localization resource.
- [SubscriptionGroupLocalization.Relationships](subscriptiongrouplocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionGroupLocalizationResponse](subscriptiongrouplocalizationresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single subscription group localization.
- [SubscriptionGroupLocalizationCreateRequest](subscriptiongrouplocalizationcreaterequest.md): Deprecated. The request body you use to create a subscription group localization.
- [SubscriptionGroupLocalizationUpdateRequest](subscriptiongrouplocalizationupdaterequest.md): Deprecated. The request body you use to update a subscription group localization update request.
