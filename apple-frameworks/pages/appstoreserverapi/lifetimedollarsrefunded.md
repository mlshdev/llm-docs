> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/lifetimedollarsrefunded](https://developer.apple.com/documentation/appstoreserverapi/lifetimedollarsrefunded)

# lifetimeDollarsRefunded

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

A value that indicates the dollar amount of refunds the customer has received in your app, since purchasing the app, across all platforms.

## Declaration

```
int32 lifetimeDollarsRefunded
```

## Possible Values

- `0`: Lifetime refund amount is undeclared. Use this value to avoid providing information for this field.
- `1`: Lifetime refund amount is 0 USD.
- `2`: Lifetime refund amount is between 0.01–49.99 USD.
- `3`: Lifetime refund amount is between 50–99.99 USD.
- `4`: Lifetime refund amount is between 100–499.99 USD.
- `5`: Lifetime refund amount is between 500–999.99 USD.
- `6`: Lifetime refund amount is between 1000–1999.99 USD.
- `7`: Lifetime refund amount is over 2000 USD.

## See Also

### Consumption data types

- [accountTenure](accounttenure.md): The age of the customer’s account.
- [appAccountToken](appaccounttoken.md): The UUID that you generate to associate a customer’s In-App Purchase with its resulting App Store transaction.
- [consumptionStatus](consumptionstatus.md): A value that indicates the extent to which the customer consumed the In-App Purchase.
- [customerConsented](customerconsented.md): A Boolean value that indicates whether the customer consented to provide consumption data to the App Store.
- [deliveryStatusV1](deliverystatusv1.md): Deprecated. A value that indicates whether the app successfully delivered an In-App Purchase that works properly.
- [lifetimeDollarsPurchased](lifetimedollarspurchased.md): A value that indicates the dollar amount of in-app purchases the customer has made in your app, since purchasing the app, across all platforms.
- [platform](platform.md): The platform on which the customer consumed the in-app purchase.
- [playTime](playtime.md): A value that indicates the amount of time that the customer used the app.
- [refundPreferenceV1](refundpreferencev1.md): A value that indicates your preferred outcome for the refund request.
- [sampleContentProvided](samplecontentprovided.md): A Boolean value that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.
- [userStatus](userstatus.md): The status of a customer’s account within your app.
