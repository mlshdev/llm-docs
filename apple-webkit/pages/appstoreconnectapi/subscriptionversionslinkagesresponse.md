> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionversionslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionversionslinkagesresponse)

# SubscriptionVersionsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

A response with the related resource identifiers for the versions of an auto-renewable subscription.

## Declaration

```
object SubscriptionVersionsLinkagesResponse
```

## Properties

- `data` — `[SubscriptionVersionsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [SubscriptionVersionsLinkagesResponse.Data](subscriptionversionslinkagesresponse/data-data.dictionary.md): The resource linkage data identifying the related resource.

## See Also

### Objects

- [SubscriptionVersion](subscriptionversion.md): A draft version of an auto-renewable subscription that captures its localized metadata and review images for App Review submission.
- [SubscriptionVersionCreateRequest](subscriptionversioncreaterequest.md): The request body you use to create a draft version of an auto-renewable subscription.
- [SubscriptionVersionImageLinkageResponse](subscriptionversionimagelinkageresponse.md): A response with the related resource identifier for a subscription version’s image.
- [SubscriptionVersionImagesLinkagesResponse](subscriptionversionimageslinkagesresponse.md): A response with the related resource identifiers for a subscription version’s images.
- [SubscriptionVersionLocalizationsLinkagesResponse](subscriptionversionlocalizationslinkagesresponse.md): A response with the related resource identifiers for a subscription version’s localizations.
- [SubscriptionVersionResponse](subscriptionversionresponse.md): The response body for endpoints that create or read a subscription version.
- [SubscriptionVersionsResponse](subscriptionversionsresponse.md): The response body for endpoints that list subscription versions.
