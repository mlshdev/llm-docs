> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/withcontiguousstorageifavailable(_:)-6nbz3](https://developer.apple.com/documentation/tabulardata/column/withcontiguousstorageifavailable(_:)-6nbz3)

# withContiguousStorageIfAvailable(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Call `body(buffer)`, where `buffer` provides access to the non-optional contiguous storage of the entire column. If the column contains missing values, `body` is not called and `nil` is returned.

## Declaration

```swift
func withContiguousStorageIfAvailable<R>(_ body: (UnsafeBufferPointer<WrappedElement>) throws -> R) rethrows -> R?
```

## Parameters

- `body`: A closure to be executed using the elements of this collection.

<a id="return-value"></a>

## Return Value

The value returned by `body`, or `nil`.

<a id="discussion"></a>

## Discussion

The optimizer can often eliminate bounds- and uniqueness-checking within an algorithm. When that fails, however, invoking the same algorithm on `body`’s argument may let you trade safety for speed.
