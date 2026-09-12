> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/payasyougo](https://developer.apple.com/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct/payasyougo)

# payAsYouGo

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A payment mode of a product discount that applies over a single billing period or multiple billing periods.

## Declaration

```swift
static let payAsYouGo: Product.SubscriptionOffer.PaymentMode
```

<a id="Discussion"></a>

## Discussion

With a Pay As You Go payment mode, subscribers pay a discounted price for each billing period for the duration of the discount.

![A timeline titled Pay As You Go that’s divided into four sections. The first three sections, labeled Introductory price, each have an equal timespan, and the fourth section, labeled Regular price has a different timespan. The first three sections represent the initial purchase, first renewal, and second renewal, respectively.  The fourth section is the third renewal, at the regular price. Three dots at the end of the timeline indicate the pattern continues with renewals at the regular price.](https://developer.apple.com/images/com.apple.storekit/media-4311775@2x.png)

## See Also

### Getting the payment modes

- [freeTrial](freetrial.md): A payment mode of a product discount that indicates a free trial offer.
- [payUpFront](payupfront.md): A payment mode of a product discount that applies the discount up front.
