> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongroupversionsresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongroupversionsresponse)

# SubscriptionGroupVersionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The response body for endpoints that list subscription group versions.

## Declaration

```
object SubscriptionGroupVersionsResponse
```

## Properties

- `data` — `[SubscriptionGroupVersion]` (required):
- `included` — `[*]`: **Allowed types:** `SubscriptionGroupLocalizationV2`, `SubscriptionGroup`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [SubscriptionGroupVersion](subscriptiongroupversion.md): A draft version of a subscription group that captures its localized metadata for App Review submission.
- [SubscriptionGroupVersionCreateRequest](subscriptiongroupversioncreaterequest.md): The request body you use to create a draft version of a subscription group.
- [SubscriptionGroupVersionLocalizationsLinkagesResponse](subscriptiongroupversionlocalizationslinkagesresponse.md): A response with the related resource identifiers for a subscription group version’s localizations.
- [SubscriptionGroupVersionResponse](subscriptiongroupversionresponse.md): The response body for endpoints that create or read a subscription group version.
- [SubscriptionGroupVersionsLinkagesResponse](subscriptiongroupversionslinkagesresponse.md): A response with the related resource identifiers for the versions of a subscription group.
