> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/collectiontaskstate](https://developer.apple.com/documentation/storekit/product/collectiontaskstate)

# Product.CollectionTaskState

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The state of a task that loads a collection of products in the background.

## Declaration

```swift
enum CollectionTaskState
```

## Topics

### Collection task states

- [Product.CollectionTaskState.loading](collectiontaskstate/loading.md): The task is loading the collection in the background.
- [Product.CollectionTaskState.success(\_:unavailable:)](collectiontaskstate/success%28__unavailable_%29.md): The task completed loading the collection.
- [Product.CollectionTaskState.failure(\_:)](collectiontaskstate/failure%28__%29.md): The task failed with an error.

### Instance Properties

- [products](collectiontaskstate/products.md): An array of available products if the task was successful.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loading products

- [Product.TaskState](taskstate.md): The state of a task that loads a product in the background.
