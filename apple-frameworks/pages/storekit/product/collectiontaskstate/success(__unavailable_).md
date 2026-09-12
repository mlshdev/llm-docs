> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/collectiontaskstate/success(_:unavailable:)](https://developer.apple.com/documentation/storekit/product/collectiontaskstate/success(_:unavailable:))

# Product.CollectionTaskState.success(\_:unavailable:)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The task completed loading the collection.

## Declaration

```swift
case success([Product], unavailable: [Product.ID])
```

## See Also

### Collection task states

- [Product.CollectionTaskState.loading](loading.md): The task is loading the collection in the background.
- [Product.CollectionTaskState.failure(\_:)](failure%28__%29.md): The task failed with an error.
