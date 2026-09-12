> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_lz4_raw](https://developer.apple.com/documentation/compression/compression_lz4_raw)

# COMPRESSION_LZ4_RAW (Swift)

**Framework:** Compression  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The LZ4 compression algorithm, without frame headers.

## Declaration

```swift
var COMPRESSION_LZ4_RAW: compression_algorithm { get }
```

<a id="Discussion"></a>

## Discussion

Raw LZ4 is the same compression algorithm as [COMPRESSION_LZ4](compression_lz4.md), but it produces and consumes the bare LZ4 block format without the small frame that the Compression library wraps around the raw stream. Use it when you need to interoperate with a third-party LZ4 implementation that expects the unframed open-source block format directly, or when you’re writing data into a higher-level container that already provides its own framing, sizes, and validation.

The frame that [COMPRESSION_LZ4](compression_lz4.md) adds carries per-block magic bytes, the decoded and encoded sizes of each block, and an explicit end-of-stream marker (described in the discussion of [COMPRESSION_LZ4](compression_lz4.md)). Raw LZ4 omits all of that.

A common reason to choose raw LZ4 is interoperability: the buffers it produces can be decoded directly by the open-source LZ4 library’s block decompression APIs, and likewise the Compression library can decode buffers produced by those APIs. The framed [COMPRESSION_LZ4](compression_lz4.md) doesn’t provide this interoperability, and a third-party decoder rejects the added frame bytes as invalid LZ4.

If you’re keeping the data inside an Apple-only pipeline, prefer [COMPRESSION_LZ4](compression_lz4.md) for the validation and the embedded size information.

Raw LZ4 is available through the buffer API only — [compression_encode_buffer(\_:\_:\_:\_:\_:\_:)](compression_encode_buffer%28____________%29.md) and [compression_decode_buffer(\_:\_:\_:\_:\_:\_:)](compression_decode_buffer%28____________%29.md).

## See Also

### Algorithm Constants

- [COMPRESSION_LZFSE](compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_ZLIB](compression_zlib.md): The zlib compression algorithm, which is recommended for cross-platform compression.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZMESH](compression_lzmesh.md): The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.
- [COMPRESSION_LZRAVEN](compression_lzraven.md): The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.

# COMPRESSION_LZ4_RAW (Objective-C)

**Framework:** Compression  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The LZ4 compression algorithm, without frame headers.

## Declaration

```objectivec
COMPRESSION_LZ4_RAW
```

<a id="Discussion"></a>

## Discussion

Raw LZ4 is the same compression algorithm as [COMPRESSION_LZ4](compression_lz4.md), but it produces and consumes the bare LZ4 block format without the small frame that the Compression library wraps around the raw stream. Use it when you need to interoperate with a third-party LZ4 implementation that expects the unframed open-source block format directly, or when you’re writing data into a higher-level container that already provides its own framing, sizes, and validation.

The frame that [COMPRESSION_LZ4](compression_lz4.md) adds carries per-block magic bytes, the decoded and encoded sizes of each block, and an explicit end-of-stream marker (described in the discussion of [COMPRESSION_LZ4](compression_lz4.md)). Raw LZ4 omits all of that.

A common reason to choose raw LZ4 is interoperability: the buffers it produces can be decoded directly by the open-source LZ4 library’s block decompression APIs, and likewise the Compression library can decode buffers produced by those APIs. The framed [COMPRESSION_LZ4](compression_lz4.md) doesn’t provide this interoperability, and a third-party decoder rejects the added frame bytes as invalid LZ4.

If you’re keeping the data inside an Apple-only pipeline, prefer [COMPRESSION_LZ4](compression_lz4.md) for the validation and the embedded size information.

Raw LZ4 is available through the buffer API only — [compression_encode_buffer](compression_encode_buffer%28____________%29.md) and [compression_decode_buffer](compression_decode_buffer%28____________%29.md).

## See Also

### Algorithm Constants

- [COMPRESSION_LZFSE](compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_ZLIB](compression_zlib.md): The zlib compression algorithm, which is recommended for cross-platform compression.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZMESH](compression_lzmesh.md): The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.
- [COMPRESSION_LZRAVEN](compression_lzraven.md): The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.
