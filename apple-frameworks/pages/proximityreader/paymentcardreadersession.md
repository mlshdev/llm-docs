> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadersession](https://developer.apple.com/documentation/proximityreader/paymentcardreadersession)

# PaymentCardReaderSession

**Framework:** ProximityReader  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The object you use to start reading a contactless payment or loyalty card.

## Declaration

```swift
class PaymentCardReaderSession
```

## Mentioned In

- [Adding support for Tap to Pay on iPhone to your app](adding-support-for-tap-to-pay-on-iphone-to-your-app.md)
- [Accepting loyalty passes from Wallet](accepting-loyalty-passes-from-wallet.md)

<a id="overview"></a>

## Overview

Use a `PaymentCardReaderSession` object to read payment and loyalty cards from a properly configured device. You don’t create this object directly. Instead, you obtain one by calling the [prepare(using:)](paymentcardreader/prepare%28using_%29.md) method of your [PaymentCardReader](paymentcardreader.md) object, which returns a session after the successful configuration of the device.

Maintain a strong reference to a session object for the duration of the card-reading process. You may use the same session object to perform multiple read operations, but you may perform only one read operation at a time from the device.

## Topics

### Reading a payment card

- [readPaymentCard(\_:)](paymentcardreadersession/readpaymentcard%28__%29-8jol5.md): Presents a sheet to read a contactless payment card for a purchase or a refund, and returns the encrypted card data.
- [readPaymentCard(\_:)](paymentcardreadersession/readpaymentcard%28__%29-hr97.md): Presents a sheet to verify a contactless payment card, and returns the card data.

### Reading a loyalty card

- [readPaymentCard(\_:vasRequest:stopOnVASResult:)](paymentcardreadersession/readpaymentcard%28__vasrequest_stoponvasresult_%29.md): Presents a sheet to read both contactless payments and loyalty cards for a purchase or refund, and returns the relevant card data.
- [readVAS(\_:)](paymentcardreadersession/readvas%28__%29.md): Presents a sheet to read a loyalty card for Value Added Services (VAS), and returns the loyalty card data.

### Requesting the PIN

- [capturePIN(using:cardReaderTransactionID:)](paymentcardreadersession/capturepin%28using_cardreadertransactionid_%29.md): Presents a sheet to capture the PIN when required by the payment card issuer, and returns the previously encrypted card data including newly captured PIN data.
- [PaymentCardReaderSession.PINToken](paymentcardreadersession/pintoken.md): A secure PIN token that you receive from your participating payment service provider.

### Canceling the reading process

- [cancelRead()](paymentcardreadersession/cancelread%28%29.md): Dismiss the sheet that prompts someone to present their card for reading.

### Getting error information

- [PaymentCardReaderSession.ReadError](paymentcardreadersession/readerror.md): Errors that can occur during a card read.

### Deprecated

- [readPaymentCard(\_:eventHandler:)](paymentcardreadersession/readpaymentcard%28__eventhandler_%29-2zgwn.md): Deprecated. Presents a sheet to read a contactless payment card for a purchase or a refund, and returns the encrypted card data.
- [readPaymentCard(\_:eventHandler:)](paymentcardreadersession/readpaymentcard%28__eventhandler_%29-20e1w.md): Deprecated. Presents a sheet to verify a contactless payment card, and returns the card data.
- [readPaymentCard(\_:vasRequest:stopOnVASResult:eventHandler:)](paymentcardreadersession/readpaymentcard%28__vasrequest_stoponvasresult_eventhandler_%29.md): Deprecated. Presents a sheet to read both contactless payments and loyalty cards for a purchase or refund, and returns the relevant card data.
- [readVAS(\_:eventHandler:)](paymentcardreadersession/readvas%28__eventhandler_%29.md): Deprecated. Presents a sheet to read a loyalty card for Value Added Services (VAS), and returns the loyalty card data.
- [id](paymentcardreadersession/id.md): Deprecated. A unique identifier for this object.
- [PaymentCardReaderSession.Event](paymentcardreadersession/event.md): Deprecated. Optional events you can observe during the card-reading process.

### Instance Properties

- [currentOSVersionDeprecationDate](paymentcardreadersession/currentosversiondeprecationdate.md): The date when current OS version will be deprecated.

## Relationships

### Inherited By

- [StoreAndForwardPaymentCardReaderSession](storeandforwardpaymentcardreadersession.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Payment card reader

- [Setting up Tap to Pay on iPhone](setting-up-the-entitlement-for-tap-to-pay-on-iphone.md): Request and configure the required entitlement to support Tap to Pay on iPhone.
- [Adding support for Tap to Pay on iPhone to your app](adding-support-for-tap-to-pay-on-iphone-to-your-app.md): Configure your app to use Tap to Pay on iPhone to read contactless payment cards.
- [PaymentCardReader](paymentcardreader.md): An object you use to configure Tap to Pay on iPhone on the current device.
