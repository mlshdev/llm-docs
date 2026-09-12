> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardtransactionrequest/transactionamountdescription](https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest/transactionamountdescription)

# PaymentCardTransactionRequest.TransactionAmountDescription

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Values that provide additional information about the transaction amount.

## Declaration

```swift
enum TransactionAmountDescription
```

<a id="overview"></a>

## Overview

This information appears below the central transaction details in the system UI. Each case applies to specific types of transactions, such as a purchase or refund. Check the [PaymentCardTransactionRequest.TransactionAmountDescription](transactionamountdescription.md) values description. If an incompatible transaction type is requested or the value(s) are out of range, it will simply not appear in the system UI.

## Topics

### Enumeration Cases

- [PaymentCardTransactionRequest.TransactionAmountDescription.installment(\_:amount:payments:)](transactionamountdescription/installment%28__amount_payments_%29.md): The total amount authorized upfront. The customer pays the specified amount on each payment cycle. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](transactiontype/purchase.md)
- [PaymentCardTransactionRequest.TransactionAmountDescription.membership(\_:)](transactionamountdescription/membership%28__%29.md): Charges the customer the amount shown for each payment cycle. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](transactiontype/purchase.md)
- [PaymentCardTransactionRequest.TransactionAmountDescription.preauthorization](transactionamountdescription/preauthorization.md): Places a temporary hold on the customer’s account. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](transactiontype/purchase.md)
- [PaymentCardTransactionRequest.TransactionAmountDescription.preauthorizationAmount(\_:)](transactionamountdescription/preauthorizationamount%28__%29.md): Places a temporary hold on the customer’s account for the specified amount. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](transactiontype/purchase.md)
- [PaymentCardTransactionRequest.TransactionAmountDescription.preauthorizationRelease](transactionamountdescription/preauthorizationrelease.md): Releases the amount shown from the temporary deposit. Only allowed for [PaymentCardTransactionRequest.TransactionType.refund](transactiontype/refund.md)
- [PaymentCardTransactionRequest.TransactionAmountDescription.surchargeAmount(\_:)](transactionamountdescription/surchargeamount%28__%29.md): The transaction’s surcharge amount. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](transactiontype/purchase.md)
- [PaymentCardTransactionRequest.TransactionAmountDescription.surchargePercent(\_:)](transactionamountdescription/surchargepercent%28__%29.md): The maximum surcharge percentage the payment processor may apply to the transaction. Only allowed for [PaymentCardTransactionRequest.TransactionType.purchase](transactiontype/purchase.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the transaction details

- [amount](amount.md): The amount of the purchase or refund in the specified currency.
- [currencyCode](currencycode.md): The ISO 4217 code that indicates the currency type.
- [type](type.md): The type of transaction, either a purchase or a refund.
- [PaymentCardTransactionRequest.TransactionType](transactiontype.md): The type of transaction to perform.
- [transactionDescription](transactiondescription.md): An optional description of the current transaction meant to provide more context, such as a recurring payment being setup or a surcharge applied.
