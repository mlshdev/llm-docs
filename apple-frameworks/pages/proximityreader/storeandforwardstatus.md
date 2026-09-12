> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardstatus](https://developer.apple.com/documentation/proximityreader/storeandforwardstatus)

# StoreAndForwardStatus

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A structure that describes the Store and Forward session status.

## Declaration

```swift
struct StoreAndForwardStatus
```

<a id="overview"></a>

## Overview

A session’s `StoreAndForwardStatus` tells you when the Store and Forward session expires and how many successful reads the framework performed using a Store and Forward session.

Call [status()](storeandforwardpaymentcardreadersession/status%28%29.md) to get the current Store and Forward status for your device.

## Topics

### Getting the status

- [expiration](storeandforwardstatus/expiration.md): The date when the Store and Forward session expires.
- [readCount](storeandforwardstatus/readcount.md): The number of successful reads the framework performed using a Store and Forward session.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Store and Forward mode

- [StoreAndForwardBatch](storeandforwardbatch.md): A structure that stores the data to send to the payment service provider to process.
- [StoreAndForwardBatchDeletionToken](storeandforwardbatchdeletiontoken.md): A secure token that you use to delete a Store and Forward batch.
- [StoreAndForwardPaymentCardReaderSession](storeandforwardpaymentcardreadersession.md): The object you use to start reading a contactless payment or loyalty card in Store and Forward mode.
- [PaymentCardReaderStore](paymentcardreaderstore.md): A structure that manages the store that contains all the Store and Forward reads.
