> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseversionimageslinkagesresponse

# InAppPurchaseVersionImagesLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

A response containing the resource identifiers of the review images for an In-App Purchase version.

## Declaration

```
object InAppPurchaseVersionImagesLinkagesResponse
```

## Properties

- `data` — `[InAppPurchaseVersionImagesLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [InAppPurchaseVersionImagesLinkagesResponse.Data](inapppurchaseversionimageslinkagesresponse/data-data.dictionary.md): The data element of the response body.

## See Also

### Objects

- [InAppPurchaseVersion](inapppurchaseversion.md): A draft version of an In-App Purchase that captures its localized metadata and review images for App Review submission.
- [InAppPurchaseVersionCreateRequest](inapppurchaseversioncreaterequest.md): The request body you use to create a draft version of an In-App Purchase.
- [InAppPurchaseVersionImageLinkageResponse](inapppurchaseversionimagelinkageresponse.md): A response containing the resource identifier of the review image for an In-App Purchase version.
- [InAppPurchaseVersionLocalizationsLinkagesResponse](inapppurchaseversionlocalizationslinkagesresponse.md): A response containing the resource identifiers of the localizations for an In-App Purchase version.
- [InAppPurchaseVersionResponse](inapppurchaseversionresponse.md): The response body for endpoints that create or read an In-App Purchase version.
- [InAppPurchaseVersionsResponse](inapppurchaseversionsresponse.md): The response body for endpoints that list In-App Purchase versions.
- [InAppPurchaseV2VersionsLinkagesResponse](inapppurchasev2versionslinkagesresponse.md): A response containing the resource identifiers of the versions of an In-App Purchase configured with the v2 API.
