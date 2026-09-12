> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_decode_buffer(_:_:_:_:_:_:)](https://developer.apple.com/documentation/compression/compression_decode_buffer(_:_:_:_:_:_:))

# compression_decode_buffer(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Compression  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decompresses the contents of a source buffer into a destination buffer.

## Declaration

```swift
func compression_decode_buffer(_ dst_buffer: UnsafeMutablePointer<UInt8>, _ dst_size: Int, _ src_buffer: UnsafePointer<UInt8>, _ src_size: Int, _ scratch_buffer: UnsafeMutableRawPointer?, _ algorithm: compression_algorithm) -> Int
```

## Parameters

- `dst_buffer`: Pointer to the buffer that receives the decompressed data.
- `dst_size`: Size of the destination buffer in bytes.
- `src_buffer`: Pointer to a buffer containing all of the compressed source data.
- `src_size`: Size of the data in the source buffer in bytes.
- `scratch_buffer`: If `scratch_buffer` is not `nil`, this parameter is a pointer to a buffer that the function uses for scratch purposes. The size of this buffer must be at least the size returned by a previous call to [compression_decode_scratch_buffer_size(\_:)](compression_decode_scratch_buffer_size%28__%29.md).

  If `scratch_buffer` is `nil`, the function creates and manages its own scratch space, but with a possible performance hit.
- `algorithm`: A constant of type [compression_algorithm](compression_algorithm.md) that specifies the compression algorithm.

<a id="return-value"></a>

## Return Value

The number of bytes written to the destination buffer after decompressing the input.  If there is not enough space in the destination buffer to hold the entire decompressed output, the function writes the first `dst_size` bytes to the buffer and returns `dst_size`. Note that this behavior differs from that of [compression_encode_buffer(\_:\_:\_:\_:\_:\_:)](compression_encode_buffer%28____________%29.md).

<a id="Discussion"></a>

## Discussion

The function writes the decompressed data to `dst_buffer`.

## See Also

### Single-step compression

- [Compressing and decompressing data with buffer compression](../accelerate/compressing-and-decompressing-data-with-buffer-compression.md): Compress a string, write it to the file system, and decompress the same file using buffer compression.
- [compression_encode_scratch_buffer_size(\_:)](compression_encode_scratch_buffer_size%28__%29.md): Returns the required compression scratch buffer size for the selected algorithm.
- [compression_encode_buffer(\_:\_:\_:\_:\_:\_:)](compression_encode_buffer%28____________%29.md): Compresses the contents of a source buffer into a destination buffer.
- [compression_decode_scratch_buffer_size(\_:)](compression_decode_scratch_buffer_size%28__%29.md): Returns the required decompression scratch buffer size for the selected algorithm.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.

# compression_decode_buffer (Objective-C)

**Framework:** Compression  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decompresses the contents of a source buffer into a destination buffer.

## Declaration

```objectivec
extern size_t compression_decode_buffer(uint8_t * restrictdst_buffer, size_t dst_size, const uint8_t * restrictsrc_buffer, size_t src_size, void * restrictscratch_buffer, compression_algorithm algorithm);
```

## Parameters

- `dst_buffer`: Pointer to the buffer that receives the decompressed data.
- `dst_size`: Size of the destination buffer in bytes.
- `src_buffer`: Pointer to a buffer containing all of the compressed source data.
- `src_size`: Size of the data in the source buffer in bytes.
- `scratch_buffer`: If `scratch_buffer` is not `nil`, this parameter is a pointer to a buffer that the function uses for scratch purposes. The size of this buffer must be at least the size returned by a previous call to [compression_decode_scratch_buffer_size](compression_decode_scratch_buffer_size%28__%29.md).

  If `scratch_buffer` is `nil`, the function creates and manages its own scratch space, but with a possible performance hit.
- `algorithm`: A constant of type [compression_algorithm](compression_algorithm.md) that specifies the compression algorithm.

<a id="return-value"></a>

## Return Value

The number of bytes written to the destination buffer after decompressing the input.  If there is not enough space in the destination buffer to hold the entire decompressed output, the function writes the first `dst_size` bytes to the buffer and returns `dst_size`. Note that this behavior differs from that of [compression_encode_buffer](compression_encode_buffer%28____________%29.md).

<a id="Discussion"></a>

## Discussion

The function writes the decompressed data to `dst_buffer`.

## See Also

### Single-step compression

- [Compressing and decompressing data with buffer compression](../accelerate/compressing-and-decompressing-data-with-buffer-compression.md): Compress a string, write it to the file system, and decompress the same file using buffer compression.
- [compression_encode_scratch_buffer_size](compression_encode_scratch_buffer_size%28__%29.md): Returns the required compression scratch buffer size for the selected algorithm.
- [compression_encode_buffer](compression_encode_buffer%28____________%29.md): Compresses the contents of a source buffer into a destination buffer.
- [compression_decode_scratch_buffer_size](compression_decode_scratch_buffer_size%28__%29.md): Returns the required decompression scratch buffer size for the selected algorithm.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.
