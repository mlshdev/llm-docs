> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offer-swift.struct/type](https://developer.apple.com/documentation/storekit/transaction/offer-swift.struct/type)

# type

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

The type of offer that applies to the transaction.

## Declaration

```swift
let type: Transaction.OfferType
```

## Mentioned In

- [Supporting offer codes in your app](../../supporting-offer-codes-in-your-app.md)

<a id="Discussion"></a>

## Discussion

See [Transaction.OfferType](../offertype-swift.struct.md) for the complete list of offer types.

For more information about introductory offers, see [Set an introductory offer for an auto-renewable subscription](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions).

For more information about promotional offers, see [Set up promotional offers for auto-renewable subscriptions](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-promotional-offers-for-auto-renewable-subscriptions).

For more information about offer codes, see [Set up offer codes](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-offer-codes).

## See Also

### Getting offer details

- [id](id.md): A string that identifies an offer that applies to the transaction.
- [Transaction.OfferType](../offertype-swift.struct.md): The types of offers that apply to a transaction.
- [paymentMode](paymentmode-swift.property.md): The payment mode for a subscription offer on an auto-renewable subscription that applies to the transaction.
- [Transaction.Offer.PaymentMode](paymentmode-swift.struct.md): The payment modes for offers that apply to a transaction.
- [period](period.md): The duration of the offer applied to a transaction.
