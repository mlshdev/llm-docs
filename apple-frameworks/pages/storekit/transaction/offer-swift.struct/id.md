> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offer-swift.struct/id](https://developer.apple.com/documentation/storekit/transaction/offer-swift.struct/id)

# id

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

A string that identifies an offer that applies to the transaction.

## Declaration

```swift
let id: String?
```

<a id="Discussion"></a>

## Discussion

The [id](id.md) is the offer identifier that you provide when you set up an offer in App Store Connect.

This value is `nil` if the offer is an [introductory](../offertype-swift.struct/introductory.md) offer for an auto-renewable subscription.

If the offer type is [code](../offertype-swift.struct/code.md), the [id](id.md) value contains the reference name of the offer code you set up in App Store Connect.  For more information, see [Set up offer codes](https://help.apple.com/app-store-connect/#/dev6a098e4b1).

## See Also

### Getting offer details

- [type](type.md): The type of offer that applies to the transaction.
- [Transaction.OfferType](../offertype-swift.struct.md): The types of offers that apply to a transaction.
- [paymentMode](paymentmode-swift.property.md): The payment mode for a subscription offer on an auto-renewable subscription that applies to the transaction.
- [Transaction.Offer.PaymentMode](paymentmode-swift.struct.md): The payment modes for offers that apply to a transaction.
- [period](period.md): The duration of the offer applied to a transaction.
