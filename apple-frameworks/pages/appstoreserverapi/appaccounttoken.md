> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/appaccounttoken](https://developer.apple.com/documentation/appstoreserverapi/appaccounttoken)

# appAccountToken

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The UUID that you generate to associate a customer’s In-App Purchase with its resulting App Store transaction.

## Declaration

```
uuid appAccountToken
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

When a customer initiates an In-App Purchase in your app, you can optionally generate an app account token and call [appAccountToken(\_:)](../storekit/product/purchaseoption/appaccounttoken%28__%29.md) to associate it with the purchase. If you use the [Original API for In-App Purchase](../storekit/original-api-for-in-app-purchase.md), you can provide a UUID in the [applicationUsername](../storekit/skmutablepayment/applicationusername.md) property. The App Store returns the same UUID in [appAccountToken](../storekit/transaction/appaccounttoken.md) in the transaction information and subscription renewal information after the customer completes the purchase.

To provide an app account token for a transaction that the customer completes outside of your app, or to update the value of an existing app account token, call the [Set App Account Token](set-app-account-token.md) endpoint.

## See Also

### Consumption data types

- [accountTenure](accounttenure.md): The age of the customer’s account.
- [consumptionStatus](consumptionstatus.md): A value that indicates the extent to which the customer consumed the In-App Purchase.
- [customerConsented](customerconsented.md): A Boolean value that indicates whether the customer consented to provide consumption data to the App Store.
- [deliveryStatusV1](deliverystatusv1.md): Deprecated. A value that indicates whether the app successfully delivered an In-App Purchase that works properly.
- [lifetimeDollarsPurchased](lifetimedollarspurchased.md): A value that indicates the dollar amount of in-app purchases the customer has made in your app, since purchasing the app, across all platforms.
- [lifetimeDollarsRefunded](lifetimedollarsrefunded.md): A value that indicates the dollar amount of refunds the customer has received in your app, since purchasing the app, across all platforms.
- [platform](platform.md): The platform on which the customer consumed the in-app purchase.
- [playTime](playtime.md): A value that indicates the amount of time that the customer used the app.
- [refundPreferenceV1](refundpreferencev1.md): A value that indicates your preferred outcome for the refund request.
- [sampleContentProvided](samplecontentprovided.md): A Boolean value that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.
- [userStatus](userstatus.md): The status of a customer’s account within your app.
