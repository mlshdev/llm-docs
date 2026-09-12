> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongroupversion](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongroupversion)

# SubscriptionGroupVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

A draft version of a subscription group that captures its localized metadata for App Review submission.

## Declaration

```
object SubscriptionGroupVersion
```

## Properties

- `type` — `string` (required): **Allowed values:** `subscriptionGroupVersions`
- `id` — `string` (required):
- `attributes` — `SubscriptionGroupVersion.Attributes`:
- `relationships` — `SubscriptionGroupVersion.Relationships`:
- `links` — `ResourceLinks`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)

## Topics

### Objects and types

- [SubscriptionGroupVersion.Attributes](subscriptiongroupversion/attributes-data.dictionary.md): Attributes that describe a subscription group version resource.
- [SubscriptionGroupVersion.Relationships](subscriptiongroupversion/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionGroupVersionCreateRequest](subscriptiongroupversioncreaterequest.md): The request body you use to create a draft version of a subscription group.
- [SubscriptionGroupVersionLocalizationsLinkagesResponse](subscriptiongroupversionlocalizationslinkagesresponse.md): A response with the related resource identifiers for a subscription group version’s localizations.
- [SubscriptionGroupVersionResponse](subscriptiongroupversionresponse.md): The response body for endpoints that create or read a subscription group version.
- [SubscriptionGroupVersionsLinkagesResponse](subscriptiongroupversionslinkagesresponse.md): A response with the related resource identifiers for the versions of a subscription group.
- [SubscriptionGroupVersionsResponse](subscriptiongroupversionsresponse.md): The response body for endpoints that list subscription group versions.
