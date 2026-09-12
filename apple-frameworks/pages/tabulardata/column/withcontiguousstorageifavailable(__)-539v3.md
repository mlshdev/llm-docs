> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/withcontiguousstorageifavailable(_:)-539v3](https://developer.apple.com/documentation/tabulardata/column/withcontiguousstorageifavailable(_:)-539v3)

# withContiguousStorageIfAvailable(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

This method always returns `nil` without calling `body`.

## Declaration

```swift
func withContiguousStorageIfAvailable<R>(_ body: (UnsafeBufferPointer<WrappedElement?>) throws -> R) rethrows -> R?
```

<a id="discussion"></a>

## Discussion

Use the version of this method that uses a buffer of non-optional elements.
