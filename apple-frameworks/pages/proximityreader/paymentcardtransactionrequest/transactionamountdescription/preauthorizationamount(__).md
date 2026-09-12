> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardtransactionrequest/transactionamountdescription/preauthorizationamount(_:)](https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest/transactionamountdescription/preauthorizationamount(_:))

# PaymentCardTransactionRequest.TransactionAmountDescription.preauthorizationAmount(\_:)

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Places a temporary hold on the customer’s account for the specified amount. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](../transactiontype/purchase.md)

## Declaration

```swift
case preauthorizationAmount(Decimal)
```
