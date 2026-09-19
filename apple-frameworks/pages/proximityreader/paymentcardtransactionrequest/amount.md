> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest/amount

# amount

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The amount of the purchase or refund in the specified currency.

## Declaration

```swift
let amount: Decimal
```

<a id="discussion"></a>

## Discussion

The value in this property must be greater than 0.

## See Also

### Getting the transaction details

- [currencyCode](currencycode.md): The ISO 4217 code that indicates the currency type.
- [type](type.md): The type of transaction, either a purchase or a refund.
- [PaymentCardTransactionRequest.TransactionType](transactiontype.md): The type of transaction to perform.
- [transactionDescription](transactiondescription.md): An optional description of the current transaction meant to provide more context, such as a recurring payment being setup or a surcharge applied.
- [PaymentCardTransactionRequest.TransactionAmountDescription](transactionamountdescription.md): Values that provide additional information about the transaction amount.
