> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/withunsafemutablebytes(_:)](https://developer.apple.com/documentation/coreml/mlmultiarray/withunsafemutablebytes(_:))

# withUnsafeMutableBytes(\_:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Calls a given closure with a raw pointer to the multiarray’s mutable storage.

## Declaration

```swift
func withUnsafeMutableBytes<R>(_ body: (UnsafeMutableRawBufferPointer, [Int]) throws -> R) rethrows -> R
```

## Parameters

- `body`: A closure with an [UnsafeMutableRawBufferPointer](https://developer.apple.com/documentation/swift/unsafemutablerawbufferpointer) parameter that points to the storage for the multiarray and its strides. This closure takes the following parameters:

  - **`ptr`**: The pointer to the buffer.
  - **`strides`**: The strides of the buffer in scalars. Note that this may be different from `strides`’s value prior to this method invocation.

<a id="Discussion"></a>

## Discussion

The buffer contains a collection of `int32`, `float16`, `float32`, or `float64` values, depending on the multiarray’s data type. It may not store these scalar values contiguously; use `strides` to get the buffer layout.

## See Also

### Providing buffer access

- [withUnsafeBufferPointer(ofType:\_:)](withunsafebufferpointer%28oftype___%29.md): Calls a given closure with a raw pointer to the multiarray’s storage.
- [withUnsafeBytes(\_:)](withunsafebytes%28__%29.md): Calls a given closure with a raw pointer to the multiarray’s storage.
- [withUnsafeMutableBufferPointer(ofType:\_:)](withunsafemutablebufferpointer%28oftype___%29.md): Calls a given closure with a raw pointer to the multiarray’s mutable storage.
