> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseversion

# InAppPurchaseVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

A draft version of an In-App Purchase that captures its localized metadata and review images for App Review submission.

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

- [InAppPurchaseVersion.Attributes](inapppurchaseversion/attributes-data.dictionary.md): Attributes that describe an In-App Purchase version resource.
- [InAppPurchaseVersion.Relationships](inapppurchaseversion/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseVersionCreateRequest](inapppurchaseversioncreaterequest.md): The request body you use to create a draft version of an In-App Purchase.
- [InAppPurchaseVersionImageLinkageResponse](inapppurchaseversionimagelinkageresponse.md): A response containing the resource identifier of the review image for an In-App Purchase version.
- [InAppPurchaseVersionImagesLinkagesResponse](inapppurchaseversionimageslinkagesresponse.md): A response containing the resource identifiers of the review images for an In-App Purchase version.
- [InAppPurchaseVersionLocalizationsLinkagesResponse](inapppurchaseversionlocalizationslinkagesresponse.md): A response containing the resource identifiers of the localizations for an In-App Purchase version.
- [InAppPurchaseVersionResponse](inapppurchaseversionresponse.md): The response body for endpoints that create or read an In-App Purchase version.
- [InAppPurchaseVersionsResponse](inapppurchaseversionsresponse.md): The response body for endpoints that list In-App Purchase versions.
- [InAppPurchaseV2VersionsLinkagesResponse](inapppurchasev2versionslinkagesresponse.md): A response containing the resource identifiers of the versions of an In-App Purchase configured with the v2 API.
