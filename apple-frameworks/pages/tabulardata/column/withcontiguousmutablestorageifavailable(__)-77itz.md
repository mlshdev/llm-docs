> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/withcontiguousmutablestorageifavailable(_:)-77itz](https://developer.apple.com/documentation/tabulardata/column/withcontiguousmutablestorageifavailable(_:)-77itz)

# withContiguousMutableStorageIfAvailable(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

This method always returns `nil` without calling `body`.

## Declaration

```swift
mutating func withContiguousMutableStorageIfAvailable<R>(_ body: (inout UnsafeMutableBufferPointer<WrappedElement?>) throws -> R) rethrows -> R?
```

<a id="discussion"></a>

## Discussion

Use the version of this method that uses a buffer of non-optional elements.
