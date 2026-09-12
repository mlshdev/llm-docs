> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongrouplocalizationsv2response](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongrouplocalizationsv2response)

# SubscriptionGroupLocalizationsV2Response

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The response body for endpoints that list subscription group localizations configured with the v2 API.

## Declaration

```
object SubscriptionGroupLocalizationsV2Response
```

## Properties

- `data` — `[SubscriptionGroupLocalizationV2]` (required):
- `included` — `[SubscriptionGroupVersion]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [SubscriptionGroupLocalizationV2](subscriptiongrouplocalizationv2.md): The localized custom name for a subscription group configured with the v2 API, shown to customers in a specific language.
- [SubscriptionGroupLocalizationV2CreateRequest](subscriptiongrouplocalizationv2createrequest.md): The request body you use to create a subscription group localization with the v2 API.
- [SubscriptionGroupLocalizationV2Response](subscriptiongrouplocalizationv2response.md): The response body for endpoints that create, read, or modify a subscription group localization with the v2 API.
- [SubscriptionGroupLocalizationV2UpdateRequest](subscriptiongrouplocalizationv2updaterequest.md): The request body you use to modify a subscription group localization.
