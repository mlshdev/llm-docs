> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardtransactionrequest/transactionamountdescription/installment(_:amount:payments:)](https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest/transactionamountdescription/installment(_:amount:payments:))

# PaymentCardTransactionRequest.TransactionAmountDescription.installment(\_:amount:payments:)

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The total amount authorized upfront. The customer pays the specified amount on each payment cycle. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](../transactiontype/purchase.md)

## Declaration

```swift
case installment(PaymentCardTransactionRequest.PaymentCycle, amount: Decimal, payments: Int)
```

## Parameters

- `amount`: The amount the payment processor deducts from the card for each installment.
- `payments`: The number of payments for the deducted amount. Must be greater than `0`, otherwise the description won’t appear in the UI.
