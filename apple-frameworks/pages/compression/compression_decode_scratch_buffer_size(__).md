> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_decode_scratch_buffer_size(_:)](https://developer.apple.com/documentation/compression/compression_decode_scratch_buffer_size(_:))

# compression_decode_scratch_buffer_size(\_:) (Swift)

**Framework:** Compression  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the required decompression scratch buffer size for the selected algorithm.

## Declaration

```swift
func compression_decode_scratch_buffer_size(_ algorithm: compression_algorithm) -> Int
```

## Parameters

- `algorithm`: A constant of type [compression_algorithm](compression_algorithm.md) that specifies the compression algorithm.

<a id="return-value"></a>

## Return Value

Size in bytes.

<a id="Discussion"></a>

## Discussion

This function returns the number of bytes to provide in an optional scratch buffer when calling [compression_decode_buffer(\_:\_:\_:\_:\_:\_:)](compression_decode_buffer%28____________%29.md).

## See Also

### Single-step compression

- [Compressing and decompressing data with buffer compression](../accelerate/compressing-and-decompressing-data-with-buffer-compression.md): Compress a string, write it to the file system, and decompress the same file using buffer compression.
- [compression_encode_scratch_buffer_size(\_:)](compression_encode_scratch_buffer_size%28__%29.md): Returns the required compression scratch buffer size for the selected algorithm.
- [compression_encode_buffer(\_:\_:\_:\_:\_:\_:)](compression_encode_buffer%28____________%29.md): Compresses the contents of a source buffer into a destination buffer.
- [compression_decode_buffer(\_:\_:\_:\_:\_:\_:)](compression_decode_buffer%28____________%29.md): Decompresses the contents of a source buffer into a destination buffer.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.

# compression_decode_scratch_buffer_size (Objective-C)

**Framework:** Compression  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the required decompression scratch buffer size for the selected algorithm.

## Declaration

```objectivec
extern size_t compression_decode_scratch_buffer_size(compression_algorithm algorithm);
```

## Parameters

- `algorithm`: A constant of type [compression_algorithm](compression_algorithm.md) that specifies the compression algorithm.

<a id="return-value"></a>

## Return Value

Size in bytes.

<a id="Discussion"></a>

## Discussion

This function returns the number of bytes to provide in an optional scratch buffer when calling [compression_decode_buffer](compression_decode_buffer%28____________%29.md).

## See Also

### Single-step compression

- [Compressing and decompressing data with buffer compression](../accelerate/compressing-and-decompressing-data-with-buffer-compression.md): Compress a string, write it to the file system, and decompress the same file using buffer compression.
- [compression_encode_scratch_buffer_size](compression_encode_scratch_buffer_size%28__%29.md): Returns the required compression scratch buffer size for the selected algorithm.
- [compression_encode_buffer](compression_encode_buffer%28____________%29.md): Compresses the contents of a source buffer into a destination buffer.
- [compression_decode_buffer](compression_decode_buffer%28____________%29.md): Decompresses the contents of a source buffer into a destination buffer.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.
