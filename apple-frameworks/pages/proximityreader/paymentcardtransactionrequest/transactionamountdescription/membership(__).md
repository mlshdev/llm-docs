> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest/transactionamountdescription/membership(_:)

# PaymentCardTransactionRequest.TransactionAmountDescription.membership(\_:)

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Charges the customer the amount shown for each payment cycle. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](../transactiontype/purchase.md)

## Declaration

```swift
case membership(PaymentCardTransactionRequest.PaymentCycle)
```
