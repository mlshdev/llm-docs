> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionoffer/periodcount](https://developer.apple.com/documentation/storekit/product/subscriptionoffer/periodcount)

# periodCount

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The number of periods that the subscription offer renews for.

## Declaration

```swift
let periodCount: Int
```

<a id="Discussion"></a>

## Discussion

If the payment mode is [payAsYouGo](paymentmode-swift.struct/payasyougo.md), the period count represents the number of periods the subscription renews at the discounted [price](price.md).

The period count is 1 for offers with payment modes [freeTrial](paymentmode-swift.struct/freetrial.md) and [payUpFront](paymentmode-swift.struct/payupfront.md).

## See Also

### Getting the subscription duration

- [period](period.md): The subscription period for the subscription offer.
