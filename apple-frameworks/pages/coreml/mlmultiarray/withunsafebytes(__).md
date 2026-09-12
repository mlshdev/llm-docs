> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/withunsafebytes(_:)](https://developer.apple.com/documentation/coreml/mlmultiarray/withunsafebytes(_:))

# withUnsafeBytes(\_:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Calls a given closure with a raw pointer to the multiarray’s storage.

## Declaration

```swift
func withUnsafeBytes<R>(_ body: (UnsafeRawBufferPointer) throws -> R) rethrows -> R
```

## Parameters

- `body`: A closure with an [UnsafeRawBufferPointer](https://developer.apple.com/documentation/swift/unsaferawbufferpointer) parameter that points to the storage for the multiarray. This closure takes the following parameter:

  - **`ptr`**: The pointer to the buffer.

## See Also

### Providing buffer access

- [withUnsafeBufferPointer(ofType:\_:)](withunsafebufferpointer%28oftype___%29.md): Calls a given closure with a raw pointer to the multiarray’s storage.
- [withUnsafeMutableBufferPointer(ofType:\_:)](withunsafemutablebufferpointer%28oftype___%29.md): Calls a given closure with a raw pointer to the multiarray’s mutable storage.
- [withUnsafeMutableBytes(\_:)](withunsafemutablebytes%28__%29.md): Calls a given closure with a raw pointer to the multiarray’s mutable storage.
