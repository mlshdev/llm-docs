> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardtransactionrequest](https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest)

# PaymentCardTransactionRequest

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

A request for a contactless purchase or refund that includes the purchase amount and currency information.

## Declaration

```swift
struct PaymentCardTransactionRequest
```

## Mentioned In

- [Adding support for Tap to Pay on iPhone to your app](adding-support-for-tap-to-pay-on-iphone-to-your-app.md)

<a id="overview"></a>

## Overview

Create a `PaymentCardTransactionRequest` to specify the amount of a purchase or refund. After you create this object, pass it to the [readPaymentCard(\_:)](paymentcardreadersession/readpaymentcard%28__%29-8jol5.md) or [readPaymentCard(\_:vasRequest:stopOnVASResult:)](paymentcardreadersession/readpaymentcard%28__vasrequest_stoponvasresult_%29.md) method of [PaymentCardReaderSession](paymentcardreadersession.md) to read the card associated with the transaction.

## Topics

### Creating a transaction request

- [init(amount:currencyCode:for:)](paymentcardtransactionrequest/init%28amount_currencycode_for_%29.md): Creates a new transaction request for the specified amount in the designated currency.

### Getting the transaction details

- [amount](paymentcardtransactionrequest/amount.md): The amount of the purchase or refund in the specified currency.
- [currencyCode](paymentcardtransactionrequest/currencycode.md): The ISO 4217 code that indicates the currency type.
- [type](paymentcardtransactionrequest/type.md): The type of transaction, either a purchase or a refund.
- [PaymentCardTransactionRequest.TransactionType](paymentcardtransactionrequest/transactiontype.md): The type of transaction to perform.
- [transactionDescription](paymentcardtransactionrequest/transactiondescription.md): An optional description of the current transaction meant to provide more context, such as a recurring payment being setup or a surcharge applied.
- [PaymentCardTransactionRequest.TransactionAmountDescription](paymentcardtransactionrequest/transactionamountdescription.md): Values that provide additional information about the transaction amount.

### Setting the preferred Application Identifier (AID) list

- [preferredAIDList](paymentcardtransactionrequest/preferredaidlist.md): The preferred Application Identifier (AID) or Registered Application Provider Identifier (RID).

### Setting the user interface language

- [userInterfaceLanguage](paymentcardtransactionrequest/userinterfacelanguage.md): The language the framework uses when localizing the user interface.

### Instance Properties

- [useISOCurrencySymbol](paymentcardtransactionrequest/useisocurrencysymbol.md): A boolean value that sets the system UI’s currency symbol to ISO 4217 three-letter code.

### Enumerations

- [PaymentCardTransactionRequest.PaymentCycle](paymentcardtransactionrequest/paymentcycle.md): Values that specify the frequency of payments

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Payment requests

- [PaymentCardVerificationRequest](paymentcardverificationrequest.md): A request to verify details for a contactless payment card.
- [PaymentCardReadResult](paymentcardreadresult.md): The result of a payment card read operation.
