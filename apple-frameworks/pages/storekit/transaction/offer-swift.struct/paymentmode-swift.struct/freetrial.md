> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/freetrial](https://developer.apple.com/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.struct/freetrial)

# freeTrial

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

A payment mode of a product discount that indicates a free trial.

## Declaration

```swift
static let freeTrial: Transaction.Offer.PaymentMode
```

<a id="Discussion"></a>

## Discussion

With a Free trial payment mode, customers pay nothing during the discount period.

![A timeline titled Free Trial that’s divided into three sections. The first section, which has a different timespan than the remaining sections, starts with the initial purchase and is the free trial period. The second section is labeled first renewal, and is at the regular price. The third section is labeled  second renewal, and is also at the regular price. Three dots at the end of the timeline indicate the pattern continues with renewals at the regular price.](https://developer.apple.com/images/com.apple.storekit/media-4311726@2x.png)

## See Also

### Getting payment modes

- [payAsYouGo](payasyougo.md): A payment mode of a product discount that applies over a single billing period or multiple billing periods.
- [payUpFront](payupfront.md): A payment mode of a product discount that applies the discount up front.
- [oneTime](onetime.md): A payment mode for a consumable, non-consumable, or non-renewing subscription offer that indicates a one-time purchase.
