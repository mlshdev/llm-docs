> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/taskstate](https://developer.apple.com/documentation/storekit/product/taskstate)

# Product.TaskState

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The state of a task that loads a product in the background.

## Declaration

```swift
enum TaskState
```

## Topics

### Task states

- [Product.TaskState.loading](taskstate/loading.md): The task is loading the product in the background.
- [Product.TaskState.success(\_:)](taskstate/success%28__%29.md): The task successfully loaded the product.
- [Product.TaskState.unavailable](taskstate/unavailable.md): The product is unavailable in the current storefront.
- [Product.TaskState.failure(\_:)](taskstate/failure%28__%29.md): The task failed with an error.

### Instance Properties

- [product](taskstate/product.md): The product value if the task was successful.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loading products

- [Product.CollectionTaskState](collectiontaskstate.md): The state of a task that loads a collection of products in the background.
