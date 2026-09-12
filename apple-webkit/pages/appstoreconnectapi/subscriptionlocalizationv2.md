> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionlocalizationv2](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionlocalizationv2)

# SubscriptionLocalizationV2

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The localized display name and description for an auto-renewable subscription configured with the v2 API, shown to customers in a specific language.

## Declaration

```
object SubscriptionLocalizationV2
```

## Properties

- `type` — `string` (required): **Allowed values:** `subscriptionLocalizations`
- `id` — `string` (required):
- `attributes` — `SubscriptionLocalizationV2.Attributes`:
- `relationships` — `SubscriptionLocalizationV2.Relationships`:
- `links` — `ResourceLinks`:

## Topics

### Objects and types

- [SubscriptionLocalizationV2.Attributes](subscriptionlocalizationv2/attributes-data.dictionary.md): Attributes that describe a SubscriptionLocalizationV2 resource.
- [SubscriptionLocalizationV2.Relationships](subscriptionlocalizationv2/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionLocalizationV2CreateRequest](subscriptionlocalizationv2createrequest.md): The request body you use to create a subscription localization with the v2 API.
- [SubscriptionLocalizationV2Response](subscriptionlocalizationv2response.md): The response body for endpoints that create, read, or modify a subscription localization with the v2 API.
- [SubscriptionLocalizationV2UpdateRequest](subscriptionlocalizationv2updaterequest.md): The request body you use to update a subscription localization with the v2 API.
- [SubscriptionLocalizationsV2Response](subscriptionlocalizationsv2response.md): The response body for endpoints that list subscription localizations configured with the v2 API.
