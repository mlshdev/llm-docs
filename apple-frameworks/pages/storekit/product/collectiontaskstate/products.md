> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/collectiontaskstate/products](https://developer.apple.com/documentation/storekit/product/collectiontaskstate/products)

# products

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An array of available products if the task was successful.

## Declaration

```swift
var products: [Product]? { get }
```

<a id="discussion"></a>

## Discussion

Use this as a convenience to access the products in code that doesn’t depend on the reason the reason a product can’t be accessed. The value is `nil` while the task is loading, or if the task fails.
