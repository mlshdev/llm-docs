> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/consumptionstatus](https://developer.apple.com/documentation/appstoreserverapi/consumptionstatus)

# consumptionStatus

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

A value that indicates the extent to which the customer consumed the In-App Purchase.

## Declaration

```
int32 consumptionStatus
```

## Possible Values

- `0`: The consumption status is undeclared. Use this value to avoid providing information for this field.
- `1`: The In-App Purchase is not consumed.
- `2`: The In-App Purchase is partially consumed.
- `3`: The In-App Purchase is fully consumed.

<a id="Discussion"></a>

## Discussion

Some examples of consumption status include the following scenarios:

- A customer purchases a “bag of 100 coins” in your app and spends all 100 coins. The In-App Purchase is considered fully consumed.
- If your app has an exchange platform that has bartering, or if your app transferred an In-App Purchase from one account to another customer’s account, the In-App Purchase is considered fully consumed.

## See Also

### Consumption data types

- [accountTenure](accounttenure.md): The age of the customer’s account.
- [appAccountToken](appaccounttoken.md): The UUID that you generate to associate a customer’s In-App Purchase with its resulting App Store transaction.
- [customerConsented](customerconsented.md): A Boolean value that indicates whether the customer consented to provide consumption data to the App Store.
- [deliveryStatusV1](deliverystatusv1.md): Deprecated. A value that indicates whether the app successfully delivered an In-App Purchase that works properly.
- [lifetimeDollarsPurchased](lifetimedollarspurchased.md): A value that indicates the dollar amount of in-app purchases the customer has made in your app, since purchasing the app, across all platforms.
- [lifetimeDollarsRefunded](lifetimedollarsrefunded.md): A value that indicates the dollar amount of refunds the customer has received in your app, since purchasing the app, across all platforms.
- [platform](platform.md): The platform on which the customer consumed the in-app purchase.
- [playTime](playtime.md): A value that indicates the amount of time that the customer used the app.
- [refundPreferenceV1](refundpreferencev1.md): A value that indicates your preferred outcome for the refund request.
- [sampleContentProvided](samplecontentprovided.md): A Boolean value that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.
- [userStatus](userstatus.md): The status of a customer’s account within your app.
