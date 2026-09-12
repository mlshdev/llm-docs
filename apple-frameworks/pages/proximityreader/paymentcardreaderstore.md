> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreaderstore](https://developer.apple.com/documentation/proximityreader/paymentcardreaderstore)

# PaymentCardReaderStore

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A structure that manages the store that contains all the Store and Forward reads.

## Declaration

```swift
struct PaymentCardReaderStore
```

## Topics

### Instance Methods

- [fetchStoredPaymentCardReadResultBatch(size:)](paymentcardreaderstore/fetchstoredpaymentcardreadresultbatch%28size_%29.md): Returns a batch of reads the framework previously stored, in chronological order, of the size you request.
- [fetchStoredPaymentCardReadResultCount()](paymentcardreaderstore/fetchstoredpaymentcardreadresultcount%28%29.md): Returns the number of reads the framework performed using a Store and Forward session.
- [resetBatchState()](paymentcardreaderstore/resetbatchstate%28%29.md): Resets the current batch state in the store, allowing you to request a new batch.
- [resolveBatch(batchDeletionToken:)](paymentcardreaderstore/resolvebatch%28batchdeletiontoken_%29.md): Deletes the current batch and all its Store and Forward payments, allowing you to request a new batch.

### Enumerations

- [PaymentCardReaderStore.StoreError](paymentcardreaderstore/storeerror.md): Values that describes errors related to the payments store.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Store and Forward mode

- [StoreAndForwardBatch](storeandforwardbatch.md): A structure that stores the data to send to the payment service provider to process.
- [StoreAndForwardBatchDeletionToken](storeandforwardbatchdeletiontoken.md): A secure token that you use to delete a Store and Forward batch.
- [StoreAndForwardPaymentCardReaderSession](storeandforwardpaymentcardreadersession.md): The object you use to start reading a contactless payment or loyalty card in Store and Forward mode.
- [StoreAndForwardStatus](storeandforwardstatus.md): A structure that describes the Store and Forward session status.
