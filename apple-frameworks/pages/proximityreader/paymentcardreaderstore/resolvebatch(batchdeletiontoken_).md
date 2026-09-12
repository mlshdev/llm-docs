> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreaderstore/resolvebatch(batchdeletiontoken:)](https://developer.apple.com/documentation/proximityreader/paymentcardreaderstore/resolvebatch(batchdeletiontoken:))

# resolveBatch(batchDeletionToken:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Deletes the current batch and all its Store and Forward payments, allowing you to request a new batch.

## Declaration

```swift
func resolveBatch(batchDeletionToken: StoreAndForwardBatchDeletionToken) async throws -> Int
```

## Parameters

- `batchDeletionToken`: The token you receive from the payment service provider.

<a id="return-value"></a>

## Return Value

The remaining number of payments to process.

<a id="discussion"></a>

## Discussion

> **Throws**

> This method throws a [PaymentCardReaderStore.StoreError](storeerror.md) if the customer isn’t online at the moment you call it, if there’s no Store and Forward batch to resolve, or if the deletion token is invalid.
