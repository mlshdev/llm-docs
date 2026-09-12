> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionstatusurlversion](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionstatusurlversion)

# SubscriptionStatusUrlVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.7+

Strings that represent versions of App Store Server Notifications.

## Declaration

```
string SubscriptionStatusUrlVersion
```

## Possible Values

- `V1`: Represents version 1 of App Store Server Notifications, and indicates you receive notifications on your server at the  [App Store Server Notifications V1](https://developer.apple.com/documentation/appstoreservernotifications/app-store-server-notifications-v1) endpoint.  Note that App Store Server Notifications V1 are deprecated.
- `V2`: Represents version 2 of App Store Server Notifications, and indicates you receive notifications on your server at the [App Store Server Notifications V2](https://developer.apple.com/documentation/appstoreservernotifications/app-store-server-notifications-v2) endpoint.

## Mentioned In

- [App Store Connect API 3.0 release notes](app-store-connect-api-3-0-release-notes.md)
- [App Store Connect API 3.6 release notes](app-store-connect-api-3-6-release-notes.md)

<a id="discussion"></a>

## Discussion

For more infomation see [Enabling App Store Server Notifications](https://developer.apple.com/documentation/appstoreservernotifications/enabling-app-store-server-notifications).

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
