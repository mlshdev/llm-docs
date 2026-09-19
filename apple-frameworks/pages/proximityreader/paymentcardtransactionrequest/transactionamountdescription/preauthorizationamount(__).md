> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest/transactionamountdescription/preauthorizationamount(_:)

# PaymentCardTransactionRequest.TransactionAmountDescription.preauthorizationAmount(\_:)

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Places a temporary hold on the customer’s account for the specified amount. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](../transactiontype/purchase.md)

## Declaration

```swift
case preauthorizationAmount(Decimal)
```
