> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionversion](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionversion)

# SubscriptionVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

A draft version of an auto-renewable subscription that captures its localized metadata and review images for App Review submission.

## Declaration

```
object SubscriptionVersion
```

## Properties

- `type` — `string` (required): **Allowed values:** `subscriptionVersions`
- `id` — `string` (required):
- `attributes` — `SubscriptionVersion.Attributes`:
- `relationships` — `SubscriptionVersion.Relationships`:
- `links` — `ResourceLinks`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)

## Topics

### Objects and types

- [SubscriptionVersion.Attributes](subscriptionversion/attributes-data.dictionary.md): Attributes that describe a SubscriptionVersion resource.
- [SubscriptionVersion.Relationships](subscriptionversion/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionVersionCreateRequest](subscriptionversioncreaterequest.md): The request body you use to create a draft version of an auto-renewable subscription.
- [SubscriptionVersionImageLinkageResponse](subscriptionversionimagelinkageresponse.md): A response with the related resource identifier for a subscription version’s image.
- [SubscriptionVersionImagesLinkagesResponse](subscriptionversionimageslinkagesresponse.md): A response with the related resource identifiers for a subscription version’s images.
- [SubscriptionVersionLocalizationsLinkagesResponse](subscriptionversionlocalizationslinkagesresponse.md): A response with the related resource identifiers for a subscription version’s localizations.
- [SubscriptionVersionResponse](subscriptionversionresponse.md): The response body for endpoints that create or read a subscription version.
- [SubscriptionVersionsLinkagesResponse](subscriptionversionslinkagesresponse.md): A response with the related resource identifiers for the versions of an auto-renewable subscription.
- [SubscriptionVersionsResponse](subscriptionversionsresponse.md): The response body for endpoints that list subscription versions.
