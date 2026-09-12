> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/replaceunsafemutablebytes(bufferindex:_:)](https://developer.apple.com/documentation/realitykit/lowlevelmesh/replaceunsafemutablebytes(bufferindex:_:))

# replaceUnsafeMutableBytes(bufferIndex:\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Replaces a Metal vertex buffer synchronously on the CPU.

## Declaration

```swift
@MainActor func replaceUnsafeMutableBytes(bufferIndex: Int, _ callback: (UnsafeMutableRawBufferPointer) -> Void)
```

<a id="discussion"></a>

## Discussion

The buffer’s contents are unspecified, and it is the caller’s responsibility to populate the buffer with valid data. The buffer is only valid for the lifetime of the callback.

## See Also

### Accessing mesh data on the CPU with Swift

- [withUnsafeBytes(bufferIndex:\_:)](withunsafebytes%28bufferindex___%29.md): Reads a Metal vertex buffer synchronously on the CPU.
- [withUnsafeMutableBytes(bufferIndex:\_:)](withunsafemutablebytes%28bufferindex___%29.md): Updates a Metal vertex buffer synchronously on the CPU.
- [withUnsafeIndices(\_:)](withunsafeindices%28__%29.md): Reads the index buffer synchronously on the CPU.
- [withUnsafeMutableIndices(\_:)](withunsafemutableindices%28__%29.md): Updates the index buffer synchronously on the CPU.
- [replaceUnsafeMutableIndices(\_:)](replaceunsafemutableindices%28__%29.md): Replaces the index buffer synchronously on the CPU.
