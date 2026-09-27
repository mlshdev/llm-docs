> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseimagesv2response

# InAppPurchaseImagesV2Response

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The response body for endpoints that list In-App Purchase images configured with the v2 API.

## Declaration

```
object InAppPurchaseImagesV2Response
```

## Properties

- `data` — `[InAppPurchaseImageV2]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [InAppPurchaseImageV2](inapppurchaseimagev2.md): A promotion image attached to an In-App Purchase configured with the v2 API.
- [InAppPurchaseImageV2CreateRequest](inapppurchaseimagev2createrequest.md): The request body you use to create an In-App Purchase image with the v2 API.
- [InAppPurchaseImageV2Response](inapppurchaseimagev2response.md): The response body for endpoints that create, read, or modify an In-App Purchase image with the v2 API.
- [InAppPurchaseImageV2UpdateRequest](inapppurchaseimagev2updaterequest.md): The request body you use to commit an upload for an In-App Purchase image with the v2 API.
