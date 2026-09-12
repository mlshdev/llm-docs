> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardverificationrequest](https://developer.apple.com/documentation/proximityreader/paymentcardverificationrequest)

# PaymentCardVerificationRequest

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

A request to verify details for a contactless payment card.

## Declaration

```swift
struct PaymentCardVerificationRequest
```

<a id="overview"></a>

## Overview

Create a `PaymentCardVerificationRequest` object to verify details of a person’s payment card before performing a transaction with that card. For example, you might use a verification request to make sure the person’s card supports a specific currency. After creating a request object, pass it to the [readPaymentCard(\_:)](paymentcardreadersession/readpaymentcard%28__%29-hr97.md) or [readPaymentCard(\_:vasRequest:stopOnVASResult:)](paymentcardreadersession/readpaymentcard%28__vasrequest_stoponvasresult_%29.md) method of your session to read the card details.

## Topics

### Creating the verification request

- [init(currencyCode:for:)](paymentcardverificationrequest/init%28currencycode_for_%29.md): Creates a new verification request using the specified currency and reason information.

### Getting the request details

- [currencyCode](paymentcardverificationrequest/currencycode.md): The ISO 4217 code that indicates the currency type.
- [verificationReason](paymentcardverificationrequest/verificationreason.md): The reason you asked to verify someone’s card.
- [PaymentCardVerificationRequest.Reason](paymentcardverificationrequest/reason.md): The reason for the verification request.

### Setting the user interface language

- [userInterfaceLanguage](paymentcardverificationrequest/userinterfacelanguage.md): The language to use when localizing the user interface.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Payment requests

- [PaymentCardTransactionRequest](paymentcardtransactionrequest.md): A request for a contactless purchase or refund that includes the purchase amount and currency information.
- [PaymentCardReadResult](paymentcardreadresult.md): The result of a payment card read operation.
