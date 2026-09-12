> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_stream/state](https://developer.apple.com/documentation/compression/compression_stream/state)

# state (Swift)

**Framework:** Compression  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The stream state object of the compression stream.

## Declaration

```swift
var state: UnsafeMutableRawPointer?
```

<a id="Discussion"></a>

## Discussion

You should not directly access this field.

## See Also

### Compression Stream Properties

- [dst_ptr](dst_ptr.md): A pointer to the first byte of the destination buffer.
- [dst_size](dst_size.md): The size, in bytes, of the destination buffer.
- [src_ptr](src_ptr.md): A pointer to the first byte of the source buffer.
- [src_size](src_size.md): The size, in bytes, of the source buffer.

# state (Objective-C)

**Framework:** Compression  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The stream state object of the compression stream.

## Declaration

```objectivec
void * state;
```

<a id="Discussion"></a>

## Discussion

You should not directly access this field.

## See Also

### Compression Stream Properties

- [dst_ptr](dst_ptr.md): A pointer to the first byte of the destination buffer.
- [dst_size](dst_size.md): The size, in bytes, of the destination buffer.
- [src_ptr](src_ptr.md): A pointer to the first byte of the source buffer.
- [src_size](src_size.md): The size, in bytes, of the source buffer.
