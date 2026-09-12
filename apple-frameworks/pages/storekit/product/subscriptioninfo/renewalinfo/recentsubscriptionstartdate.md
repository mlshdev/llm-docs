> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/recentsubscriptionstartdate](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/recentsubscriptionstartdate)

# recentSubscriptionStartDate

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The earliest start date of a subscription in a series of auto-renewable subscription purchases that ignores all lapses of paid service shorter than 60 days.

## Declaration

```swift
@backDeployed(before: iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, macCatalyst 16.0)
var recentSubscriptionStartDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Don’t use the [recentSubscriptionStartDate](recentsubscriptionstartdate.md) date to calculate days of paid service. For more information about paid days of service, see [Net revenue after a year](https://developer.apple.com/app-store/subscriptions/#revenue-after-one-year).

## See Also

### Getting subscription dates

- [renewalDate](renewaldate.md): The UNIX time, in milliseconds, that the most recent auto-renewable subscription purchase expires.
