> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader](https://developer.apple.com/documentation/proximityreader/paymentcardreader)

# PaymentCardReader

**Framework:** ProximityReader  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

An object you use to configure Tap to Pay on iPhone on the current device.

## Declaration

```swift
class PaymentCardReader
```

## Mentioned In

- [Adding support for Tap to Pay on iPhone to your app](adding-support-for-tap-to-pay-on-iphone-to-your-app.md)

<a id="overview"></a>

## Overview

A `PaymentCardReader` object coordinates the reading of payment and loyalty cards using existing iPhone hardware. Use it to read cards that might otherwise require specialized hardware. For example, use it to collect contactless payment information from another iPhone or from NFC-enabled hardware, such as NFC-enabled plastic cards.

After you create the `PaymentCardReader` object, call [prepare(using:)](paymentcardreader/prepare%28using_%29.md) to validate the payment pipeline and receive a new [PaymentCardReaderSession](paymentcardreadersession.md). Use the session object to read card information related to payments and refunds, or to verify card information.

## Topics

### Creating a payment reader

- [init(options:)](paymentcardreader/init%28options_%29.md): Creates a payment card reader with the specified options.
- [PaymentCardReader.Options](paymentcardreader/options-swift.struct.md): Additional information you use to configure a payment card reader.

### Getting the feature availability

- [isSupported](paymentcardreader/issupported.md): A Boolean value that indicates whether this device model supports Tap to Pay on iPhone.

### Configuring Tap to Pay on iPhone

- [prepare(using:)](paymentcardreader/prepare%28using_%29.md): Configures the pipeline for reading payment or loyalty cards.

### Displaying the Tap to Pay on iPhone’s terms and conditions

- [isAccountLinked(using:)](paymentcardreader/isaccountlinked%28using_%29.md): A Boolean value that indicates whether the account is already linked.
- [linkAccount(using:)](paymentcardreader/linkaccount%28using_%29.md): Presents a sheet for the merchant to accept Tap to Pay on iPhone’s Terms and Conditions on a device.
- [relinkAccount(using:)](paymentcardreader/relinkaccount%28using_%29.md): Presents a sheet for the merchant to re-accept Tap to Pay on iPhone’s Terms and Conditions on a device using a different Apple Account.
- [PaymentCardReader.Token](paymentcardreader/token.md): A secure token that you receive from your participating payment service provider.

### Observing reader events

- [events](paymentcardreader/events.md): A stream of events you receive indicating the activities of the payment card reader.
- [PaymentCardReader.Event](paymentcardreader/event.md): An event you receive indicating the state or activity of the payment card reader.

### Getting the configuration details

- [readerIdentifier](paymentcardreader/readeridentifier.md): The unique identifier for this card reader.
- [options](paymentcardreader/options-swift.property.md): The defined configuration settings when the reader was created.

### Deprecated

- [id](paymentcardreader/id.md): Deprecated. A unique identifier for this object.
- [prepare(using:updateHandler:)](paymentcardreader/prepare%28using_updatehandler_%29.md): Deprecated. Configures the pipeline for reading payment or loyalty cards.
- [PaymentCardReader.UpdateEvent](paymentcardreader/updateevent.md): Deprecated. An event you receive during the configuration of the payment system.

### Instance Methods

- [fetchPaymentCardReaderStore()](paymentcardreader/fetchpaymentcardreaderstore%28%29.md): Returns a store containing the read results the framework obtained using a Store and Forward session.
- [prepareStoreAndForward()](paymentcardreader/preparestoreandforward%28%29.md): Configures the pipeline for reading payment or loyalty cards in Store and Forward mode.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Payment card reader

- [Setting up Tap to Pay on iPhone](setting-up-the-entitlement-for-tap-to-pay-on-iphone.md): Request and configure the required entitlement to support Tap to Pay on iPhone.
- [Adding support for Tap to Pay on iPhone to your app](adding-support-for-tap-to-pay-on-iphone-to-your-app.md): Configure your app to use Tap to Pay on iPhone to read contactless payment cards.
- [PaymentCardReaderSession](paymentcardreadersession.md): The object you use to start reading a contactless payment or loyalty card.
