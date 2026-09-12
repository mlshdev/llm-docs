> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadresult](https://developer.apple.com/documentation/proximityreader/paymentcardreadresult)

# PaymentCardReadResult

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The result of a payment card read operation.

## Declaration

```swift
struct PaymentCardReadResult
```

## Mentioned In

- [Adding support for Tap to Pay on iPhone to your app](adding-support-for-tap-to-pay-on-iphone-to-your-app.md)
- [Accepting loyalty passes from Wallet](accepting-loyalty-passes-from-wallet.md)

<a id="overview"></a>

## Overview

The system returns a `PaymentCardReadResult` in response to your requests to read a person’s payment card. Use this information to facilitate payments with your payment service provider.

For information about how to read a payment card, see [PaymentCardReaderSession](paymentcardreadersession.md).

## Topics

### Getting the result data

- [generalCardData](paymentcardreadresult/generalcarddata.md): A Base64-encoded string that contains general cardholder and terminal data in tag-length-value (TLV) format.
- [paymentCardData](paymentcardreadresult/paymentcarddata.md): A Base64-encoded string that contains the encrypted payment information to send to your payment provider.

### Checking the read outcome

- [outcome](paymentcardreadresult/outcome.md): The outcome of the transaction.
- [PaymentCardReadResult.ReadOutcome](paymentcardreadresult/readoutcome.md): Values that describe the outcome of a read request.

### Getting the result ID

- [id](paymentcardreadresult/id.md): The unique identifier for the transaction.

### Getting the PIN status

- [isPINFallback](paymentcardreadresult/ispinfallback.md): A Boolean value that indicates whether the PIN Fallback occurred.
- [pinBypassed](paymentcardreadresult/pinbypassed.md): A Boolean value that indicates whether the consumer bypassed the PIN entry.

### Getting the kernel type

- [applicationTypeIdentifier](paymentcardreadresult/applicationtypeidentifier.md): A string identifier that represents the payment application type (kernel) used to read the card.

### Instance Properties

- [cardEffectiveState](paymentcardreadresult/cardeffectivestate-swift.property.md): The effective state of the card that the system read.
- [cardExpirationState](paymentcardreadresult/cardexpirationstate-swift.property.md): The expiration state of the card that the system read.

### Enumerations

- [PaymentCardReadResult.CardEffectiveState](paymentcardreadresult/cardeffectivestate-swift.enum.md): Values that describe the effective state of the card that was read.
- [PaymentCardReadResult.CardExpirationState](paymentcardreadresult/cardexpirationstate-swift.enum.md): Values that describe the expiration state of the card that the system read.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Payment requests

- [PaymentCardTransactionRequest](paymentcardtransactionrequest.md): A request for a contactless purchase or refund that includes the purchase amount and currency information.
- [PaymentCardVerificationRequest](paymentcardverificationrequest.md): A request to verify details for a contactless payment card.
