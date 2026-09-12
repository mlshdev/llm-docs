> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/accounttenure](https://developer.apple.com/documentation/appstoreserverapi/accounttenure)

# accountTenure

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The age of the customer’s account.

## Declaration

```
int32 accountTenure
```

## Possible Values

- `0`: Account age is undeclared. Use this value to avoid providing information for this field.
- `1`: Account age is between 0–3 days.
- `2`: Account age is between 3–10 days.
- `3`: Account age is between 10–30 days.
- `4`: Account age is between 30–90 days.
- `5`: Account age is between 90–180 days.
- `6`: Account age is between 180–365 days.
- `7`: Account age is over 365 days.

## See Also

### Consumption data types

- [appAccountToken](appaccounttoken.md): The UUID that you generate to associate a customer’s In-App Purchase with its resulting App Store transaction.
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
