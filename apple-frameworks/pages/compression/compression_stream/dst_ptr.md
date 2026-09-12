> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_stream/dst_ptr](https://developer.apple.com/documentation/compression/compression_stream/dst_ptr)

# dst_ptr (Swift)

**Framework:** Compression  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to the first byte of the destination buffer.

## Declaration

```swift
var dst_ptr: UnsafeMutablePointer<UInt8>
```

## See Also

### Compression Stream Properties

- [dst_size](dst_size.md): The size, in bytes, of the destination buffer.
- [src_ptr](src_ptr.md): A pointer to the first byte of the source buffer.
- [src_size](src_size.md): The size, in bytes, of the source buffer.
- [state](state.md): The stream state object of the compression stream.

# dst_ptr (Objective-C)

**Framework:** Compression  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to the first byte of the destination buffer.

## Declaration

```objectivec
uint8_t * dst_ptr;
```

## See Also

### Compression Stream Properties

- [dst_size](dst_size.md): The size, in bytes, of the destination buffer.
- [src_ptr](src_ptr.md): A pointer to the first byte of the source buffer.
- [src_size](src_size.md): The size, in bytes, of the source buffer.
- [state](state.md): The stream state object of the compression stream.
