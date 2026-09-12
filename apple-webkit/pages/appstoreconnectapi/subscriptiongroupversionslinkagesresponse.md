> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongroupversionslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongroupversionslinkagesresponse)

# SubscriptionGroupVersionsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

A response with the related resource identifiers for the versions of a subscription group.

## Declaration

```
object SubscriptionGroupVersionsLinkagesResponse
```

## Properties

- `data` — `[SubscriptionGroupVersionsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [SubscriptionGroupVersionsLinkagesResponse.Data](subscriptiongroupversionslinkagesresponse/data-data.dictionary.md): The data element of the response body.

## See Also

### Objects

- [SubscriptionGroupVersion](subscriptiongroupversion.md): A draft version of a subscription group that captures its localized metadata for App Review submission.
- [SubscriptionGroupVersionCreateRequest](subscriptiongroupversioncreaterequest.md): The request body you use to create a draft version of a subscription group.
- [SubscriptionGroupVersionLocalizationsLinkagesResponse](subscriptiongroupversionlocalizationslinkagesresponse.md): A response with the related resource identifiers for a subscription group version’s localizations.
- [SubscriptionGroupVersionResponse](subscriptiongroupversionresponse.md): The response body for endpoints that create or read a subscription group version.
- [SubscriptionGroupVersionsResponse](subscriptiongroupversionsresponse.md): The response body for endpoints that list subscription group versions.
