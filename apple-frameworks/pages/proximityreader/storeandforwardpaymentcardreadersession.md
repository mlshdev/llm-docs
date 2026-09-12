> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardpaymentcardreadersession](https://developer.apple.com/documentation/proximityreader/storeandforwardpaymentcardreadersession)

# StoreAndForwardPaymentCardReaderSession

**Framework:** ProximityReader  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The object you use to start reading a contactless payment or loyalty card in Store and Forward mode.

## Declaration

```swift
class StoreAndForwardPaymentCardReaderSession
```

<a id="overview"></a>

## Overview

Use a `StoreAndForwardPaymentCardReaderSession` object to read payment and loyalty cards from a properly configured device. You don’t create this object directly. Instead, you obtain one by calling the [prepareStoreAndForward()](paymentcardreader/preparestoreandforward%28%29.md) method of your [PaymentCardReader](paymentcardreader.md) object, which returns a session after the successful configuration of the device.

Maintain a strong reference to a session object for the duration of the card-reading process. You may use the same session object to perform multiple read operations, but you may perform only one read operation at a time

## Topics

### Instance Methods

- [decline()](storeandforwardpaymentcardreadersession/decline%28%29.md): Removes the last read from store.
- [status()](storeandforwardpaymentcardreadersession/status%28%29.md): Allows the merchant to check the status of the Store and Forward session.

## Relationships

### Inherits From

- [PaymentCardReaderSession](paymentcardreadersession.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Store and Forward mode

- [StoreAndForwardBatch](storeandforwardbatch.md): A structure that stores the data to send to the payment service provider to process.
- [StoreAndForwardBatchDeletionToken](storeandforwardbatchdeletiontoken.md): A secure token that you use to delete a Store and Forward batch.
- [StoreAndForwardStatus](storeandforwardstatus.md): A structure that describes the Store and Forward session status.
- [PaymentCardReaderStore](paymentcardreaderstore.md): A structure that manages the store that contains all the Store and Forward reads.
