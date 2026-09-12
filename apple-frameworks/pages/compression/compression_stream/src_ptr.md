> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_stream/src_ptr](https://developer.apple.com/documentation/compression/compression_stream/src_ptr)

# src_ptr (Swift)

**Framework:** Compression  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to the first byte of the source buffer.

## Declaration

```swift
var src_ptr: UnsafePointer<UInt8>
```

## See Also

### Compression Stream Properties

- [dst_ptr](dst_ptr.md): A pointer to the first byte of the destination buffer.
- [dst_size](dst_size.md): The size, in bytes, of the destination buffer.
- [src_size](src_size.md): The size, in bytes, of the source buffer.
- [state](state.md): The stream state object of the compression stream.

# src_ptr (Objective-C)

**Framework:** Compression  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to the first byte of the source buffer.

## Declaration

```objectivec
const uint8_t * src_ptr;
```

## See Also

### Compression Stream Properties

- [dst_ptr](dst_ptr.md): A pointer to the first byte of the destination buffer.
- [dst_size](dst_size.md): The size, in bytes, of the destination buffer.
- [src_size](src_size.md): The size, in bytes, of the source buffer.
- [state](state.md): The stream state object of the compression stream.
