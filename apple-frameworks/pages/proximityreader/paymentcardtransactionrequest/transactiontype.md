> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardtransactionrequest/transactiontype](https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest/transactiontype)

# PaymentCardTransactionRequest.TransactionType

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The type of transaction to perform.

## Declaration

```swift
enum TransactionType
```

## Topics

### Getting the transaction type

- [PaymentCardTransactionRequest.TransactionType.purchase](transactiontype/purchase.md): A purchase transaction.
- [PaymentCardTransactionRequest.TransactionType.refund](transactiontype/refund.md): A refund transaction.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the transaction details

- [amount](amount.md): The amount of the purchase or refund in the specified currency.
- [currencyCode](currencycode.md): The ISO 4217 code that indicates the currency type.
- [type](type.md): The type of transaction, either a purchase or a refund.
- [transactionDescription](transactiondescription.md): An optional description of the current transaction meant to provide more context, such as a recurring payment being setup or a surcharge applied.
- [PaymentCardTransactionRequest.TransactionAmountDescription](transactionamountdescription.md): Values that provide additional information about the transaction amount.
