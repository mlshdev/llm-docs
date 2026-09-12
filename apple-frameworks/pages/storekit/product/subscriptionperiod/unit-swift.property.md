> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionperiod/unit-swift.property](https://developer.apple.com/documentation/storekit/product/subscriptionperiod/unit-swift.property)

# unit

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The increment of time for the subscription period.

## Declaration

```swift
let unit: Product.SubscriptionPeriod.Unit
```

<a id="Discussion"></a>

## Discussion

The units used to specify a subscription period include day, week, month, and year, as defined in [Product.SubscriptionPeriod.Unit](unit-swift.enum.md).

To calculate the duration of one subscription period, multiply the [unit](unit-swift.property.md) by the number of units ([value](value.md)).

## See Also

### Getting the subscription period

- [value](value.md): The number of period units.
- [Product.SubscriptionPeriod.Unit](unit-swift.enum.md): Units of time that describe subscription periods.
