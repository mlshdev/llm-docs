> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardtransactionrequest/transactiondescription](https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest/transactiondescription)

# transactionDescription

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

An optional description of the current transaction meant to provide more context, such as a recurring payment being setup or a surcharge applied.

## Declaration

```swift
var transactionDescription: PaymentCardTransactionRequest.TransactionAmountDescription?
```

<a id="discussion"></a>

## Discussion

This attribute is only displayed when the [PaymentCardTransactionRequest.TransactionType](transactiontype.md) is compatible with the [PaymentCardTransactionRequest.TransactionAmountDescription](transactionamountdescription.md) use case.

## See Also

### Getting the transaction details

- [amount](amount.md): The amount of the purchase or refund in the specified currency.
- [currencyCode](currencycode.md): The ISO 4217 code that indicates the currency type.
- [type](type.md): The type of transaction, either a purchase or a refund.
- [PaymentCardTransactionRequest.TransactionType](transactiontype.md): The type of transaction to perform.
- [PaymentCardTransactionRequest.TransactionAmountDescription](transactionamountdescription.md): Values that provide additional information about the transaction amount.
