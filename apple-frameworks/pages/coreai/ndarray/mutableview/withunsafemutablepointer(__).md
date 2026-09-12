> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutableview/withunsafemutablepointer(_:)](https://developer.apple.com/documentation/coreai/ndarray/mutableview/withunsafemutablepointer(_:))

# withUnsafeMutablePointer(\_:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Invokes the provided closure with the backing data and memory layout of this view.

## Declaration

```swift
@export(implementation) consuming func withUnsafeMutablePointer<R, E>(_ body: (UnsafeMutablePointer<Element>, Span<Int>, Span<Int>) throws(E) -> R) throws(E) -> R where E : Error
```

<a id="return-value"></a>

## Return Value

The value returned by the closure.

<a id="discussion"></a>

## Discussion

- body: The closure to be invoked with a mutable pointer to the first element, as well as shape and strides of the view.

> **Note**

> This function is intended for situations where you may not be working with contiguous layouts, and as such cannot use `contiguousElements`. You are responsible for reading the `strides` passed in when indexing the backing data. If the view has an [interleaveLayout](interleavelayout.md), the strides for that dimension are block strides and must be interpreted accordingly — see [NDArray.InterleaveLayout](../interleavelayout-swift.struct.md).
