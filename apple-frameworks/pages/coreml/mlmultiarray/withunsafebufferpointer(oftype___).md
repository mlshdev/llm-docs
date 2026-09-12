> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/withunsafebufferpointer(oftype:_:)](https://developer.apple.com/documentation/coreml/mlmultiarray/withunsafebufferpointer(oftype:_:))

# withUnsafeBufferPointer(ofType:\_:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Calls a given closure with a raw pointer to the multiarray’s storage.

## Declaration

```swift
func withUnsafeBufferPointer<S, R>(ofType type: S.Type, _ body: (UnsafeBufferPointer<S>) throws -> R) rethrows -> R where S : MLShapedArrayScalar
```

## Parameters

- `type`: The element type of the buffer passed in the body. This must be a Swift primitive type equivalent to `dataType`. This closure takes the following parameter:

  - **`ptr`**: The pointer to the buffer.
- `body`: A closure with an [UnsafeBufferPointer](https://developer.apple.com/documentation/swift/unsafebufferpointer) parameter that points to the storage for the multiarray.

<a id="Discussion"></a>

## Discussion

The buffer contains a collection of `int32`, `float16`, `float32`, or `float64` values, depending on the multiarray’s data type. It may not store these scalar values contiguously; use [strides](strides.md) to get the buffer layout.

## See Also

### Providing buffer access

- [withUnsafeBytes(\_:)](withunsafebytes%28__%29.md): Calls a given closure with a raw pointer to the multiarray’s storage.
- [withUnsafeMutableBufferPointer(ofType:\_:)](withunsafemutablebufferpointer%28oftype___%29.md): Calls a given closure with a raw pointer to the multiarray’s mutable storage.
- [withUnsafeMutableBytes(\_:)](withunsafemutablebytes%28__%29.md): Calls a given closure with a raw pointer to the multiarray’s mutable storage.
