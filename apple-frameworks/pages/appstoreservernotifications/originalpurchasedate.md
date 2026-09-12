> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/originalpurchasedate](https://developer.apple.com/documentation/appstoreservernotifications/originalpurchasedate)

# originalPurchaseDate

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The purchase date of the transaction associated with the original transaction identifier.

## Declaration

```
timestamp originalPurchaseDate
```

<a id="Discussion"></a>

## Discussion

The original purchase date is in UNIX time, in milliseconds.

## See Also

### Purchase dates

- [purchaseDate](purchasedate.md): The time that the App Store charged the customer’s account for a purchase, a restored product, a subscription, or a subscription renewal after a lapse.
- [recentSubscriptionStartDate](recentsubscriptionstartdate.md): The earliest start date of a subscription in a series of auto-renewable subscription purchases that ignores all lapses of paid service shorter than 60 days.
