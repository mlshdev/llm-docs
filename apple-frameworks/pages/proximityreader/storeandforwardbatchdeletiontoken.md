> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardbatchdeletiontoken](https://developer.apple.com/documentation/proximityreader/storeandforwardbatchdeletiontoken)

# StoreAndForwardBatchDeletionToken

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A secure token that you use to delete a Store and Forward batch.

## Declaration

```swift
struct StoreAndForwardBatchDeletionToken
```

<a id="overview"></a>

## Overview

A `StoreAndForwardBatchDeletionToken` holds the token  your payment service provider supplies when they successfully send a batch of Store and Forward payments for processing.

After receiving the raw token data from your provider, create an instance of this structure and pass it to the [resolveBatch(batchDeletionToken:)](paymentcardreaderstore/resolvebatch%28batchdeletiontoken_%29.md) method. When resolving a Store and Forward batch, the [PaymentCardReaderStore](paymentcardreaderstore.md) uses this token to verify that the payments were delivered to the payment service provider and can now be deleted.

## Topics

### Creating a token

- [init(rawValue:)](storeandforwardbatchdeletiontoken/init%28rawvalue_%29.md): Creates a token with the string your payment service provider provides.

### Getting the token value

- [rawValue](storeandforwardbatchdeletiontoken/rawvalue.md): The raw token string your payment service provider supplies.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Store and Forward mode

- [StoreAndForwardBatch](storeandforwardbatch.md): A structure that stores the data to send to the payment service provider to process.
- [StoreAndForwardPaymentCardReaderSession](storeandforwardpaymentcardreadersession.md): The object you use to start reading a contactless payment or loyalty card in Store and Forward mode.
- [StoreAndForwardStatus](storeandforwardstatus.md): A structure that describes the Store and Forward session status.
- [PaymentCardReaderStore](paymentcardreaderstore.md): A structure that manages the store that contains all the Store and Forward reads.
