> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/withunsafemutablebufferpointer(oftype:_:)](https://developer.apple.com/documentation/coreml/mlmultiarray/withunsafemutablebufferpointer(oftype:_:))

# withUnsafeMutableBufferPointer(ofType:\_:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Calls a given closure with a raw pointer to the multiarray’s mutable storage.

## Declaration

```swift
func withUnsafeMutableBufferPointer<S, R>(ofType type: S.Type, _ body: (UnsafeMutableBufferPointer<S>, [Int]) throws -> R) rethrows -> R where S : MLShapedArrayScalar
```

## Parameters

- `type`: The element type of the buffer passed in the body. This must be a Swift primitive type equivalent to `dataType`.
- `body`: A closure with an [UnsafeMutableBufferPointer](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer) parameter that points to the storage for the multiarray and its strides. This closure takes the following parameters:

  - **`ptr`**: The pointer to the buffer.
  - **`strides`**: The strides of the buffer in scalars. Note that this may be different from `strides`’s value prior to this method invocation.

<a id="Discussion"></a>

## Discussion

The buffer contains a collection of `int32`, `float16`, `float32`, or `float64` values, depending on the multiarray’s data type. It may not store these scalar values contiguously; use `strides` to get the buffer layout.

## See Also

### Providing buffer access

- [withUnsafeBufferPointer(ofType:\_:)](withunsafebufferpointer%28oftype___%29.md): Calls a given closure with a raw pointer to the multiarray’s storage.
- [withUnsafeBytes(\_:)](withunsafebytes%28__%29.md): Calls a given closure with a raw pointer to the multiarray’s storage.
- [withUnsafeMutableBytes(\_:)](withunsafemutablebytes%28__%29.md): Calls a given closure with a raw pointer to the multiarray’s mutable storage.
