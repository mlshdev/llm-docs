> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseversionlocalizationslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseversionlocalizationslinkagesresponse)

# InAppPurchaseVersionLocalizationsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

A response containing the resource identifiers of the localizations for an in-app purchase version.

## Declaration

```
object InAppPurchaseVersionLocalizationsLinkagesResponse
```

## Properties

- `data` — `[InAppPurchaseVersionLocalizationsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [InAppPurchaseVersionLocalizationsLinkagesResponse.Data](inapppurchaseversionlocalizationslinkagesresponse/data-data.dictionary.md): The data element of the response body.

## See Also

### Objects

- [InAppPurchaseVersion](inapppurchaseversion.md): A draft version of an in-app purchase that captures its localized metadata and review images for App Review submission.
- [InAppPurchaseVersionCreateRequest](inapppurchaseversioncreaterequest.md): The request body you use to create a draft version of an in-app purchase.
- [InAppPurchaseVersionImageLinkageResponse](inapppurchaseversionimagelinkageresponse.md): A response containing the resource identifier of the review image for an in-app purchase version.
- [InAppPurchaseVersionImagesLinkagesResponse](inapppurchaseversionimageslinkagesresponse.md): A response containing the resource identifiers of the review images for an in-app purchase version.
- [InAppPurchaseVersionResponse](inapppurchaseversionresponse.md): The response body for endpoints that create or read an in-app purchase version.
- [InAppPurchaseVersionsResponse](inapppurchaseversionsresponse.md): The response body for endpoints that list in-app purchase versions.
- [InAppPurchaseV2VersionsLinkagesResponse](inapppurchasev2versionslinkagesresponse.md): A response containing the resource identifiers of the versions of an in-app purchase configured with the v2 API.
