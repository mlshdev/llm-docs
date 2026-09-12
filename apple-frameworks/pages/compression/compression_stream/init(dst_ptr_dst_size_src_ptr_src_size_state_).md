> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_stream/init(dst_ptr:dst_size:src_ptr:src_size:state:)](https://developer.apple.com/documentation/compression/compression_stream/init(dst_ptr:dst_size:src_ptr:src_size:state:))

# init(dst_ptr:dst_size:src_ptr:src_size:state:)

**Framework:** Compression  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new compression stream structure.

## Declaration

```swift
init(dst_ptr: UnsafeMutablePointer<UInt8>, dst_size: Int, src_ptr: UnsafePointer<UInt8>, src_size: Int, state: UnsafeMutableRawPointer?)
```

## Parameters

- `dst_ptr`: A pointer to the first byte of the destination buffer.
- `dst_size`: The size, in bytes, on the destination buffer.
- `src_ptr`: A pointer to the first byte of the source buffer.
- `src_size`: The size, in bytes, on the source buffer.
- `state`: The stream state object of the compression stream. You should not directly access this field.
