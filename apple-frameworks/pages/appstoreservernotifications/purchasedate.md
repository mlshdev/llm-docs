> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreservernotifications/purchasedate

# purchaseDate

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The time that the App Store charged the customer’s account for a purchase, a restored product, a subscription, or a subscription renewal after a lapse.

## Declaration

```
timestamp purchaseDate
```

<a id="Discussion"></a>

## Discussion

The purchase date is in UNIX time, in milliseconds.

## See Also

### Purchase dates

- [originalPurchaseDate](originalpurchasedate.md): The purchase date of the transaction associated with the original transaction identifier.
- [recentSubscriptionStartDate](recentsubscriptionstartdate.md): The earliest start date of a subscription in a series of auto-renewable subscription purchases that ignores all lapses of paid service shorter than 60 days.
