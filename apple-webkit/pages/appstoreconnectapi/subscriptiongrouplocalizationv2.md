> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongrouplocalizationv2](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongrouplocalizationv2)

# SubscriptionGroupLocalizationV2

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The localized custom name for a subscription group configured with the v2 API, shown to customers in a specific language.

## Declaration

```
object SubscriptionGroupLocalizationV2
```

## Properties

- `type` — `string` (required): **Allowed values:** `subscriptionGroupLocalizations`
- `id` — `string` (required):
- `attributes` — `SubscriptionGroupLocalizationV2.Attributes`:
- `relationships` — `SubscriptionGroupLocalizationV2.Relationships`:
- `links` — `ResourceLinks`:

## Topics

### Objects and types

- [SubscriptionGroupLocalizationV2.Attributes](subscriptiongrouplocalizationv2/attributes-data.dictionary.md): Attributes that describe a subscription group localization resource.
- [SubscriptionGroupLocalizationV2.Relationships](subscriptiongrouplocalizationv2/relationships-data.dictionary.md): The relationship you include in the request and the one on which you can operate.

## See Also

### Objects

- [SubscriptionGroupLocalizationV2CreateRequest](subscriptiongrouplocalizationv2createrequest.md): The request body you use to create a subscription group localization with the v2 API.
- [SubscriptionGroupLocalizationV2Response](subscriptiongrouplocalizationv2response.md): The response body for endpoints that create, read, or modify a subscription group localization with the v2 API.
- [SubscriptionGroupLocalizationV2UpdateRequest](subscriptiongrouplocalizationv2updaterequest.md): The request body you use to modify a subscription group localization.
- [SubscriptionGroupLocalizationsV2Response](subscriptiongrouplocalizationsv2response.md): The response body for endpoints that list subscription group localizations configured with the v2 API.
