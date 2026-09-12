> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardtransactionrequest/transactionamountdescription/surchargepercent(_:)](https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest/transactionamountdescription/surchargepercent(_:))

# PaymentCardTransactionRequest.TransactionAmountDescription.surchargePercent(\_:)

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The maximum surcharge percentage the payment processor may apply to the transaction. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](../transactiontype/purchase.md)

## Declaration

```swift
case surchargePercent(Double)
```

<a id="discussion"></a>

## Discussion

The payment processor determines the final surcharge amount when they process the transaction. The percentage value is between 1 and 100 and up to two decimal places.
