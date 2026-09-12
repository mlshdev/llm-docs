> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.property](https://developer.apple.com/documentation/storekit/transaction/offer-swift.struct/paymentmode-swift.property)

# paymentMode

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

The payment mode for a subscription offer on an auto-renewable subscription that applies to the transaction.

## Declaration

```swift
let paymentMode: Transaction.Offer.PaymentMode?
```

<a id="Discussion"></a>

## Discussion

You set up subscription offers and determine the payment mode when you configure subscriptions in App Store Connect. For more information about the Free Trial ([freeTrial](paymentmode-swift.struct/freetrial.md)), Pay As You Go ([payAsYouGo](paymentmode-swift.struct/payasyougo.md)), and Pay Up Front ([payUpFront](paymentmode-swift.struct/payupfront.md)) payment modes, see [Pricing and availability](https://developer.apple.com/help/app-store-connect/reference/pricing-and-availability).

## See Also

### Getting offer details

- [id](id.md): A string that identifies an offer that applies to the transaction.
- [type](type.md): The type of offer that applies to the transaction.
- [Transaction.OfferType](../offertype-swift.struct.md): The types of offers that apply to a transaction.
- [Transaction.Offer.PaymentMode](paymentmode-swift.struct.md): The payment modes for offers that apply to a transaction.
- [period](period.md): The duration of the offer applied to a transaction.
