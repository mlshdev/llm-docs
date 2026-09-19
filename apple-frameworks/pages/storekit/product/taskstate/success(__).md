> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/taskstate/success(_:)

# Product.TaskState.success(\_:)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The task successfully loaded the product.

## Declaration

```swift
case success(Product)
```

## See Also

### Task states

- [Product.TaskState.loading](loading.md): The task is loading the product in the background.
- [Product.TaskState.unavailable](unavailable.md): The product is unavailable in the current storefront.
- [Product.TaskState.failure(\_:)](failure%28__%29.md): The task failed with an error.
