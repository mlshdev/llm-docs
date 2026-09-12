> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apppricev2inlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/apppricev2inlinecreate)

# AppPriceV2InlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.3+

An inline object for specifying a territory-specific price when creating or updating an app price schedule.

## Declaration

```
object AppPriceV2InlineCreate
```

## Properties

- `attributes` — `AppPriceV2InlineCreate.Attributes`:
- `id` — `string`:
- `relationships` — `AppPriceV2InlineCreate.Relationships`:
- `type` — `string` (required): **Allowed values:** `appPrices`

## Topics

### Dictionaries

- [AppPriceV2InlineCreate.Attributes](apppricev2inlinecreate/attributes-data.dictionary.md)
- [AppPriceV2InlineCreate.Relationships](apppricev2inlinecreate/relationships-data.dictionary.md)

## See Also

### Objects and data types

- [App](app.md): An app registered in App Store Connect, representing all versions, metadata, and configuration for your iOS, macOS, tvOS, or watchOS application.
- [AppWithoutIncludesResponse](appwithoutincludesresponse.md): A response containing a single app, without including related resources.
- [AppsWithoutIncludesResponse](appswithoutincludesresponse.md): A response containing a list of apps, without including related resources.
- [AppUpdateRequest](appupdaterequest.md): The request body you use to update an App Update.
- [AppClipsResponse](appclipsresponse.md): The response body for endpoints that list App Clips for an app.
- [AppResponse](appresponse.md): The response body for endpoints that read or modify a single app in your team.
- [AppsResponse](appsresponse.md): A response containing a list of apps registered in your App Store Connect team.
- [InAppPurchase](inapppurchase.md): Deprecated. A one-time purchasable item available in an app, such as a consumable, non-consumable, or non-renewing subscription.
- [InAppPurchaseResponse](inapppurchaseresponse.md): Deprecated. The response body for endpoints that read a single in-app purchase.
- [InAppPurchasesResponse](inapppurchasesresponse.md): Deprecated. The response body for endpoints that list in-app purchases for an app.
- [AppBetaTestersLinkagesRequest](appbetatesterslinkagesrequest.md): A request body you use to remove beta testers from an app.
- [AppPricePointV3](apppricepointv3.md): A specific price tier in App Store pricing, defining the customer price and developer proceeds across territories.
- [AppPricePointV3Response](apppricepointv3response.md): A response containing a single App Store price point with its territory-specific pricing details.
- [AppPricePointsV3Response](apppricepointsv3response.md): A response containing a list of available App Store price points.
- [AppPriceSchedule](apppriceschedule.md): The pricing schedule for an app, specifying base territory prices, manual prices for other territories, and scheduled price changes.
