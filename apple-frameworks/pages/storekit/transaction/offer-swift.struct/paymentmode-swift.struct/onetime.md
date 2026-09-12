> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/onetime](https://developer.apple.com/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/onetime)

# oneTime

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

A payment mode for a consumable, non-consumable, or non-renewing subscription offer that indicates a one-time purchase.

## Declaration

```swift
@backDeployed(before: iOS 26.0, macOS 26.0, tvOS 26.0, watchOS 26.0, visionOS 26.0)
static var oneTime: Transaction.Offer.PaymentMode { get }
```

## See Also

### Getting payment modes

- [freeTrial](freetrial.md): A payment mode of a product discount that indicates a free trial.
- [payAsYouGo](payasyougo.md): A payment mode of a product discount that applies over a single billing period or multiple billing periods.
- [payUpFront](payupfront.md): A payment mode of a product discount that applies the discount up front.
