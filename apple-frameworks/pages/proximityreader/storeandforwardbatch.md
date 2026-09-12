> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardbatch](https://developer.apple.com/documentation/proximityreader/storeandforwardbatch)

# StoreAndForwardBatch

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A structure that stores the data to send to the payment service provider to process.

## Declaration

```swift
struct StoreAndForwardBatch
```

<a id="overview"></a>

## Overview

The framework invokes these payments using a Store and Forward session.

## Topics

### Getting the batch details

- [id](storeandforwardbatch/id.md): The unique identifier for the batch.
- [count](storeandforwardbatch/count.md): The number of payments this batch includes.
- [intermediateCertificate](storeandforwardbatch/intermediatecertificate.md): An array that contains the intermediate certificates that the system uses to sign the leaf certificate.
- [leafCertificate](storeandforwardbatch/leafcertificate.md): The leaf certificate the framework uses to sign this batch.
- [payments](storeandforwardbatch/payments.md): The payments that are part of the batch.
- [signature](storeandforwardbatch/signature.md): The signature, as a Base64-encoded string, that guarantees the integrity of the batch.

### Getting the results

- [StoreAndForwardBatch.StoredPaymentCardReadResult](storeandforwardbatch/storedpaymentcardreadresult.md): A result structure that represents each payment the framework read using a Store and Forward session.

## Relationships

### Conforms To

- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Store and Forward mode

- [StoreAndForwardBatchDeletionToken](storeandforwardbatchdeletiontoken.md): A secure token that you use to delete a Store and Forward batch.
- [StoreAndForwardPaymentCardReaderSession](storeandforwardpaymentcardreadersession.md): The object you use to start reading a contactless payment or loyalty card in Store and Forward mode.
- [StoreAndForwardStatus](storeandforwardstatus.md): A structure that describes the Store and Forward session status.
- [PaymentCardReaderStore](paymentcardreaderstore.md): A structure that manages the store that contains all the Store and Forward reads.
