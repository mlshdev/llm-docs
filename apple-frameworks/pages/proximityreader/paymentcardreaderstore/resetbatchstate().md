> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreaderstore/resetbatchstate()](https://developer.apple.com/documentation/proximityreader/paymentcardreaderstore/resetbatchstate())

# resetBatchState()

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Resets the current batch state in the store, allowing you to request a new batch.

## Declaration

```swift
func resetBatchState() async throws
```

<a id="discussion"></a>

## Discussion

Use this method if the transmission of the batch to the partner service provider fails and the batch processing status is unknown. The framework doesn’t delete the reads; instead, it dissociates them from the batch.

> **Throws**

> This method throws a [PaymentCardReaderStore.StoreError](storeerror.md) if there’s no batch for the framework to reset.
