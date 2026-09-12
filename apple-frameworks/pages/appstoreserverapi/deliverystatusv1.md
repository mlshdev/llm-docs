> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/deliverystatusv1](https://developer.apple.com/documentation/appstoreserverapi/deliverystatusv1)

# deliveryStatusV1

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

A value that indicates whether the app successfully delivered an In-App Purchase that works properly.

> Use [deliveryStatus](deliverystatus.md) instead, along with the [ConsumptionRequest](consumptionrequest.md) for the [Send Consumption Information](send-consumption-information.md) endpoint.

## Declaration

```
int32 deliveryStatusV1
```

## Possible Values

- `0`: The app delivered the consumable In-App Purchase and it’s working properly.
- `1`: The app didn’t deliver the consumable In-App Purchase due to a quality issue.
- `2`: The app delivered the wrong item.
- `3`: The app didn’t deliver the consumable In-App Purchase due to a server outage.
- `4`: The app didn’t deliver the consumable In-App Purchase due to an in-game currency change.
- `5`: The app didn’t deliver the consumable In-App Purchase for other reasons.

<a id="discussion"></a>

## Discussion

Use these delivery status values in the [ConsumptionRequestV1](consumptionrequestv1.md) request body.

## See Also

### Consumption data types

- [accountTenure](accounttenure.md): The age of the customer’s account.
- [appAccountToken](appaccounttoken.md): The UUID that you generate to associate a customer’s In-App Purchase with its resulting App Store transaction.
- [consumptionStatus](consumptionstatus.md): A value that indicates the extent to which the customer consumed the In-App Purchase.
- [customerConsented](customerconsented.md): A Boolean value that indicates whether the customer consented to provide consumption data to the App Store.
- [lifetimeDollarsPurchased](lifetimedollarspurchased.md): A value that indicates the dollar amount of in-app purchases the customer has made in your app, since purchasing the app, across all platforms.
- [lifetimeDollarsRefunded](lifetimedollarsrefunded.md): A value that indicates the dollar amount of refunds the customer has received in your app, since purchasing the app, across all platforms.
- [platform](platform.md): The platform on which the customer consumed the in-app purchase.
- [playTime](playtime.md): A value that indicates the amount of time that the customer used the app.
- [refundPreferenceV1](refundpreferencev1.md): A value that indicates your preferred outcome for the refund request.
- [sampleContentProvided](samplecontentprovided.md): A Boolean value that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.
- [userStatus](userstatus.md): The status of a customer’s account within your app.
