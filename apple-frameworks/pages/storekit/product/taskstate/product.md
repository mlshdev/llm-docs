> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/taskstate/product](https://developer.apple.com/documentation/storekit/product/taskstate/product)

# product

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The product value if the task was successful.

## Declaration

```swift
var product: Product? { get }
```

<a id="discussion"></a>

## Discussion

Use this as a convenience to access the product value in code that doesn’t depend on the reason the product can’t be accessed. The value is `nil` while the product is loading, or if the product can’t be accessed for any reason.
