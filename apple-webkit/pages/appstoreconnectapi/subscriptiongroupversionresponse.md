> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongroupversionresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongroupversionresponse)

# SubscriptionGroupVersionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The response body for endpoints that create or read a subscription group version.

## Declaration

```
object SubscriptionGroupVersionResponse
```

## Properties

- `data` — `SubscriptionGroupVersion` (required):
- `included` — `[*]`: **Allowed types:** `SubscriptionGroupLocalizationV2`, `SubscriptionGroup`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [SubscriptionGroupVersion](subscriptiongroupversion.md): A draft version of a subscription group that captures its localized metadata for App Review submission.
- [SubscriptionGroupVersionCreateRequest](subscriptiongroupversioncreaterequest.md): The request body you use to create a draft version of a subscription group.
- [SubscriptionGroupVersionLocalizationsLinkagesResponse](subscriptiongroupversionlocalizationslinkagesresponse.md): A response with the related resource identifiers for a subscription group version’s localizations.
- [SubscriptionGroupVersionsLinkagesResponse](subscriptiongroupversionslinkagesresponse.md): A response with the related resource identifiers for the versions of a subscription group.
- [SubscriptionGroupVersionsResponse](subscriptiongroupversionsresponse.md): The response body for endpoints that list subscription group versions.
