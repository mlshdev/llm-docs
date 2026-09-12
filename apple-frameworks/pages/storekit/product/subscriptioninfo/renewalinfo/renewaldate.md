> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/renewaldate](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/renewaldate)

# renewalDate

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The UNIX time, in milliseconds, that the most recent auto-renewable subscription purchase expires.

## Declaration

```swift
@backDeployed(before: iOS 17.0, macOS 14.0, tvOS 17.0, watchOS 10.0, macCatalyst 17.0)
var renewalDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

The [renewalDate](renewaldate.md) is a value that’s always present for auto-renewable subscriptions, even for expired subscriptions. This date indicates the expiration date of the most recent auto-renewable subscription purchase, including renewals, and may be in the past. For subscriptions that renew successfully, the [renewalDate](renewaldate.md) is the date when the subscription renews.

## See Also

### Getting subscription dates

- [recentSubscriptionStartDate](recentsubscriptionstartdate.md): The earliest start date of a subscription in a series of auto-renewable subscription purchases that ignores all lapses of paid service shorter than 60 days.
