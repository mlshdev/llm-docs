> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offer-swift.property](https://developer.apple.com/documentation/storekit/transaction/offer-swift.property)

# offer

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

The offer that applies to the transaction, including its offer type, payment mode, and ID.

## Declaration

```swift
let offer: Transaction.Offer?
```

## Mentioned In

- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md)
- [Supporting win-back offers in your app](../supporting-win-back-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

This value is `nil` if the transaction doesn’t include an offer.

You set up offers for auto-renewable subscriptions and other In-App Purchase product types in App Store Connect. If a customer redeems an offer, this property contains the offer details, including its [type](offer-swift.struct/type.md), [paymentMode](offer-swift.struct/paymentmode-swift.property.md), and [id](id.md). For more information, see [Transaction.Offer](offer-swift.struct.md).

## See Also

### Identifying offers

- [Transaction.Offer](offer-swift.struct.md): Discounts or promotions that apply to a transaction.
