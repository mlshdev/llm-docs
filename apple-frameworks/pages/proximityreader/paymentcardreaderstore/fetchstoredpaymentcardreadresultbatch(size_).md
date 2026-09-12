> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreaderstore/fetchstoredpaymentcardreadresultbatch(size:)](https://developer.apple.com/documentation/proximityreader/paymentcardreaderstore/fetchstoredpaymentcardreadresultbatch(size:))

# fetchStoredPaymentCardReadResultBatch(size:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Returns a batch of reads the framework previously stored, in chronological order, of the size you request.

## Declaration

```swift
func fetchStoredPaymentCardReadResultBatch(size: Int = 0) async throws -> StoreAndForwardBatch
```

## Parameters

- `size`: The desired batch size, if no size is provided, the framework uses a  batch size of `0` that returns all the payments stored  in the batch.

<a id="return-value"></a>

## Return Value

[StoreAndForwardBatch](../storeandforwardbatch.md) when successful.

<a id="discussion"></a>

## Discussion

There is only one active batch per application at a given time and to fetch a new batch the caller needs to reset or resolve the current batch.

> **Throws**

> This method throws a [PaymentCardReaderStore.StoreError](storeerror.md) if the size is smaller than `0` or greater than the number of payments stored, or if there’s no payment stored.  The framework also throws a `StoreError` if a previous batch is pending resolution at the time when you call this  method.
