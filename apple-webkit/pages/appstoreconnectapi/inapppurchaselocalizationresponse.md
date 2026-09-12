> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaselocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalizationresponse)

# InAppPurchaseLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The response body for endpoints that create, read, or modify a single in-app purchase localization.

> This object is deprecated. Use [InAppPurchaseLocalizationV2Response](inapppurchaselocalizationv2response.md) instead.

## Declaration

```
object InAppPurchaseLocalizationResponse
```

## Properties

- `data` — `InAppPurchaseLocalization` (required):
- `included` — `[InAppPurchaseV2]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [InAppPurchaseV2Response](inapppurchasev2response.md): A response containing a single in-app purchase configured via the v2 API.
- [InAppPurchasesV2Response](inapppurchasesv2response.md): A response containing a list of in-app purchases configured via the v2 API.
- [InAppPurchaseV2](inapppurchasev2.md): An in-app purchase item configured via the v2 API, supporting both consumable and non-consumable types.
- [InAppPurchaseV2CreateRequest](inapppurchasev2createrequest.md): The request body you use to create an in-app purchase.
- [InAppPurchaseV2UpdateRequest](inapppurchasev2updaterequest.md): The request body you use to update an in-app purchase v2update request.
- [InAppPurchaseContentResponse](inapppurchasecontentresponse.md): A response containing a single hosted content record for an in-app purchase.
- [InAppPurchasePricePointsResponse](inapppurchasepricepointsresponse.md): The response body for endpoints that list available price points for an in-app purchase.
- [InAppPurchasePricePoint](inapppurchasepricepoint.md): A standard price tier for in-app purchases, specifying the customer price and developer proceeds in a territory.
- [InAppPurchasePricesResponse](inapppurchasepricesresponse.md): A response containing a list of configured prices for an in-app purchase.
- [InAppPurchasePrice](inapppurchaseprice.md): A configured price for an in-app purchase in a specific App Store territory.
- [InAppPurchasePriceInlineCreate](inapppurchasepriceinlinecreate.md): An inline object for specifying a territory-specific price when creating or updating an in-app purchase price schedule.
- [AppInAppPurchasesLinkagesResponse](appinapppurchaseslinkagesresponse.md): Deprecated.
- [AppInAppPurchasesV2LinkagesResponse](appinapppurchasesv2linkagesresponse.md)
- [InAppPurchasePricePointEqualizationsLinkagesResponse](inapppurchasepricepointequalizationslinkagesresponse.md)
- [InAppPurchaseV2AppStoreReviewScreenshotLinkageResponse](inapppurchasev2appstorereviewscreenshotlinkageresponse.md)
