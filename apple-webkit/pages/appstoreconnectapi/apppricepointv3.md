> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apppricepointv3](https://developer.apple.com/documentation/appstoreconnectapi/apppricepointv3)

# AppPricePointV3

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.3+

A specific price tier in App Store pricing, defining the customer price and developer proceeds across territories.

## Declaration

```
object AppPricePointV3
```

## Properties

- `attributes` — `AppPricePointV3.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppPricePointV3.Relationships`:
- `type` — `string` (required): **Allowed values:** `appPricePoints`

## Mentioned In

- [App Store Connect API 2.3 release notes](app-store-connect-api-2-3-release-notes.md)

## Topics

### Objects

- [AppPricePointV3.Attributes](apppricepointv3/attributes-data.dictionary.md): Attributes that describe an app price point v3 resource.
- [AppPricePointV3.Relationships](apppricepointv3/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

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
- [AppPricePointV3Response](apppricepointv3response.md): A response containing a single App Store price point with its territory-specific pricing details.
- [AppPricePointsV3Response](apppricepointsv3response.md): A response containing a list of available App Store price points.
- [AppPriceSchedule](apppriceschedule.md): The pricing schedule for an app, specifying base territory prices, manual prices for other territories, and scheduled price changes.
- [AppPriceScheduleCreateRequest](apppriceschedulecreaterequest.md): The request body you use to create an app price schedule.
