> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionlocalization](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionlocalization)

# SubscriptionLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The localized display name and description for an auto-renewable subscription shown to customers on the App Store.

> This object is deprecated. Use [SubscriptionLocalizationV2](subscriptionlocalizationv2.md) instead.

## Declaration

```
object SubscriptionLocalization
```

## Properties

- `attributes` — `SubscriptionLocalization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `SubscriptionLocalization.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionLocalizations`

## Topics

### Objects

- [SubscriptionLocalization.Attributes](subscriptionlocalization/attributes-data.dictionary.md): Attributes that describe a subscription localization resource.
- [SubscriptionLocalization.Relationships](subscriptionlocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionLocalizationCreateRequest](subscriptionlocalizationcreaterequest.md): Deprecated. The request body you use to create a subscription localization.
- [SubscriptionLocalizationUpdateRequest](subscriptionlocalizationupdaterequest.md): Deprecated. The request body you use to update a subscription localization update request.
- [SubscriptionLocalizationResponse](subscriptionlocalizationresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single subscription localization.
