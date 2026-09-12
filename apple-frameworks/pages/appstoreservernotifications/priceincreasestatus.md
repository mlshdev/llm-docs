> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/priceincreasestatus](https://developer.apple.com/documentation/appstoreservernotifications/priceincreasestatus)

# priceIncreaseStatus

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The status that indicates whether an auto-renewable subscription is subject to a price increase.

## Declaration

```
int32 priceIncreaseStatus
```

## Possible Values

- `0`: The customer hasn’t yet responded to an auto-renewable subscription price increase that requires customer consent.
- `1`: The customer consented to an auto-renewable subscription price increase that requires customer consent, or the App Store has notified the customer of an auto-renewable subscription price increase that doesn’t require consent.

<a id="Discussion"></a>

## Discussion

For more information about managing prices, see [Managing Prices](https://developer.apple.com/app-store/subscriptions/#managing-prices-for-existing-subscribers) and [Manage pricing for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/devc9870599e).
