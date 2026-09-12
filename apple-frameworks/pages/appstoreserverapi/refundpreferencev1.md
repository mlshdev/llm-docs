> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/refundpreferencev1](https://developer.apple.com/documentation/appstoreserverapi/refundpreferencev1)

# refundPreferenceV1

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.11+

A value that indicates your preferred outcome for the refund request.

## Declaration

```
int32 refundPreferenceV1
```

## Possible Values

- `0`: The refund preference is undeclared. Use this value to avoid providing information for this field.
- `1`: You prefer that the App Store grants the refund.
- `2`: You prefer that the App Store declines the refund.
- `3`: You have no preference whether the App Store grants or declines the refund.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

Your refund preference is one of a variety of factors that the App Store uses to inform its refund decisions.

## See Also

### Consumption data types

- [accountTenure](accounttenure.md): The age of the customer’s account.
- [appAccountToken](appaccounttoken.md): The UUID that you generate to associate a customer’s In-App Purchase with its resulting App Store transaction.
- [consumptionStatus](consumptionstatus.md): A value that indicates the extent to which the customer consumed the In-App Purchase.
- [customerConsented](customerconsented.md): A Boolean value that indicates whether the customer consented to provide consumption data to the App Store.
- [deliveryStatusV1](deliverystatusv1.md): Deprecated. A value that indicates whether the app successfully delivered an In-App Purchase that works properly.
- [lifetimeDollarsPurchased](lifetimedollarspurchased.md): A value that indicates the dollar amount of in-app purchases the customer has made in your app, since purchasing the app, across all platforms.
- [lifetimeDollarsRefunded](lifetimedollarsrefunded.md): A value that indicates the dollar amount of refunds the customer has received in your app, since purchasing the app, across all platforms.
- [platform](platform.md): The platform on which the customer consumed the in-app purchase.
- [playTime](playtime.md): A value that indicates the amount of time that the customer used the app.
- [sampleContentProvided](samplecontentprovided.md): A Boolean value that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.
- [userStatus](userstatus.md): The status of a customer’s account within your app.
