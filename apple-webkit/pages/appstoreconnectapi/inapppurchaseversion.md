> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseversion](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseversion)

# InAppPurchaseVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

A draft version of an in-app purchase that captures its localized metadata and review images for App Review submission.

## Declaration

```
object InAppPurchaseVersion
```

## Properties

- `type` — `string` (required): **Allowed values:** `inAppPurchaseVersions`
- `id` — `string` (required):
- `attributes` — `InAppPurchaseVersion.Attributes`:
- `relationships` — `InAppPurchaseVersion.Relationships`:
- `links` — `ResourceLinks`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)

## Topics

### Objects and types

- [InAppPurchaseVersion.Attributes](inapppurchaseversion/attributes-data.dictionary.md): Attributes that describe an in-app purchase version resource.
- [InAppPurchaseVersion.Relationships](inapppurchaseversion/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseVersionCreateRequest](inapppurchaseversioncreaterequest.md): The request body you use to create a draft version of an in-app purchase.
- [InAppPurchaseVersionImageLinkageResponse](inapppurchaseversionimagelinkageresponse.md): A response containing the resource identifier of the review image for an in-app purchase version.
- [InAppPurchaseVersionImagesLinkagesResponse](inapppurchaseversionimageslinkagesresponse.md): A response containing the resource identifiers of the review images for an in-app purchase version.
- [InAppPurchaseVersionLocalizationsLinkagesResponse](inapppurchaseversionlocalizationslinkagesresponse.md): A response containing the resource identifiers of the localizations for an in-app purchase version.
- [InAppPurchaseVersionResponse](inapppurchaseversionresponse.md): The response body for endpoints that create or read an in-app purchase version.
- [InAppPurchaseVersionsResponse](inapppurchaseversionsresponse.md): The response body for endpoints that list in-app purchase versions.
- [InAppPurchaseV2VersionsLinkagesResponse](inapppurchasev2versionslinkagesresponse.md): A response containing the resource identifiers of the versions of an in-app purchase configured with the v2 API.
