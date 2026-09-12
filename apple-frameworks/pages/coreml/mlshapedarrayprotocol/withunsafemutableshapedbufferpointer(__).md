> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/withunsafemutableshapedbufferpointer(_:)](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/withunsafemutableshapedbufferpointer(_:))

# withUnsafeMutableShapedBufferPointer(\_:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Provides read-write access of the shaped array’s underlying memory to a closure.

## Declaration

```swift
mutating func withUnsafeMutableShapedBufferPointer<R>(_ body: (inout UnsafeMutableBufferPointer<Self.Scalar>, [Int], [Int]) throws -> R) rethrows -> R
```

## Parameters

- `body`: A closure that accesses a shaped array’s underlying memory.

<a id="Discussion"></a>

## Discussion

The method returns the value your closure returns, if applicable.

## See Also

### Modifying a shaped array type

- [fill(with:)](fill%28with_%29.md): Fills the array with a value.
