> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/recentsubscriptionstartdate](https://developer.apple.com/documentation/appstoreservernotifications/recentsubscriptionstartdate)

# recentSubscriptionStartDate

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.5+

The earliest start date of a subscription in a series of auto-renewable subscription purchases that ignores all lapses of paid service shorter than 60 days.

## Declaration

```
timestamp recentSubscriptionStartDate
```

<a id="Discussion"></a>

## Discussion

For more information about the recent subscription start date, see [recentSubscriptionStartDate](../appstoreserverapi/recentsubscriptionstartdate.md).

> **Important**

>  Don’t use the [recentSubscriptionStartDate](recentsubscriptionstartdate.md) date to calculate days of paid service. For more information about paid days of service, see [Net revenue after a year](https://developer.apple.com/app-store/subscriptions/#revenue-after-one-year).

## See Also

### Purchase dates

- [originalPurchaseDate](originalpurchasedate.md): The purchase date of the transaction associated with the original transaction identifier.
- [purchaseDate](purchasedate.md): The time that the App Store charged the customer’s account for a purchase, a restored product, a subscription, or a subscription renewal after a lapse.
