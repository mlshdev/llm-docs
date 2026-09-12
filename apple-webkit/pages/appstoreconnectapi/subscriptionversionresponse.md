> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionversionresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionversionresponse)

# SubscriptionVersionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The response body for endpoints that create or read a subscription version.

## Declaration

```
object SubscriptionVersionResponse
```

## Properties

- `data` — `SubscriptionVersion` (required):
- `included` — `[*]`: **Allowed types:** `SubscriptionImageV2`, `SubscriptionLocalizationV2`, `Subscription`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [SubscriptionVersion](subscriptionversion.md): A draft version of an auto-renewable subscription that captures its localized metadata and review images for App Review submission.
- [SubscriptionVersionCreateRequest](subscriptionversioncreaterequest.md): The request body you use to create a draft version of an auto-renewable subscription.
- [SubscriptionVersionImageLinkageResponse](subscriptionversionimagelinkageresponse.md): A response with the related resource identifier for a subscription version’s image.
- [SubscriptionVersionImagesLinkagesResponse](subscriptionversionimageslinkagesresponse.md): A response with the related resource identifiers for a subscription version’s images.
- [SubscriptionVersionLocalizationsLinkagesResponse](subscriptionversionlocalizationslinkagesresponse.md): A response with the related resource identifiers for a subscription version’s localizations.
- [SubscriptionVersionsLinkagesResponse](subscriptionversionslinkagesresponse.md): A response with the related resource identifiers for the versions of an auto-renewable subscription.
- [SubscriptionVersionsResponse](subscriptionversionsresponse.md): The response body for endpoints that list subscription versions.
