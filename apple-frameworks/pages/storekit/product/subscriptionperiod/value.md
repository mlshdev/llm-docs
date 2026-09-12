> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionperiod/value](https://developer.apple.com/documentation/storekit/product/subscriptionperiod/value)

# value

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The number of period units.

## Declaration

```swift
let value: Int
```

<a id="Discussion"></a>

## Discussion

Use the value and the unit together to determine the subscription period. For example, if the [unit](unit-swift.property.md) is [Product.SubscriptionPeriod.Unit.month](unit-swift.enum/month.md), and the [value](value.md) is `3`, the subscription period is three months.

## See Also

### Getting the subscription period

- [unit](unit-swift.property.md): The increment of time for the subscription period.
- [Product.SubscriptionPeriod.Unit](unit-swift.enum.md): Units of time that describe subscription periods.
