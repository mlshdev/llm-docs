> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_lzraven](https://developer.apple.com/documentation/compression/compression_lzraven)

# COMPRESSION_LZRAVEN (Swift)

**Framework:** Compression  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.

## Declaration

```swift
var COMPRESSION_LZRAVEN: compression_algorithm { get }
```

<a id="Discussion"></a>

## Discussion

LZRAVEN is the Apple high-compression algorithm, designed to replace [COMPRESSION_LZMA](compression_lzma.md) across Apple platforms. It combines LZ77 with modern entropy coding, adaptive context-sensitive modeling, and near-optimal parsing to often achieve a slightly better compression ratio than [COMPRESSION_LZMA](compression_lzma.md). LZRAVEN uses an 8 MB dictionary and encodes faster than [COMPRESSION_LZMA](compression_lzma.md) while decoding 3x faster on Apple silicon, where the decoder leverages vector units to process multiple symbols per operation.

An LZRAVEN-encoded buffer begins with a stream header that encodes global encoder parameters, defines the quantized size of the LZ dictionary, and provides reserved feature flags for future extensions. The stream header is followed by a sequence of compressed or uncompressed blocks that are terminated by an empty block.

Each block begins with a header that encodes the block’s compressed size and feature flags. A block can be either compressed or stored uncompressed when compression would provide no benefit. LZRAVEN is practical for latency-sensitive workloads where [COMPRESSION_LZMA](compression_lzma.md) decode speed would be prohibitive.

LZRAVEN is available through the buffer API only — [compression_encode_buffer(\_:\_:\_:\_:\_:\_:)](compression_encode_buffer%28____________%29.md) and [compression_decode_buffer(\_:\_:\_:\_:\_:\_:)](compression_decode_buffer%28____________%29.md).

The decoder requires approximately 36 KB of scratch memory, making it well suited for memory-constrained environments.

> **Note**

> The `COMPRESSION_LZRAVEN` algorithm is available in version 27 or later of Apple operating systems.

## See Also

### Algorithm Constants

- [COMPRESSION_LZFSE](compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZ4_RAW](compression_lz4_raw.md): The LZ4 compression algorithm, without frame headers.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_ZLIB](compression_zlib.md): The zlib compression algorithm, which is recommended for cross-platform compression.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZMESH](compression_lzmesh.md): The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.

# COMPRESSION_LZRAVEN (Objective-C)

**Framework:** Compression  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.

## Declaration

```objectivec
COMPRESSION_LZRAVEN
```

<a id="Discussion"></a>

## Discussion

LZRAVEN is the Apple high-compression algorithm, designed to replace [COMPRESSION_LZMA](compression_lzma.md) across Apple platforms. It combines LZ77 with modern entropy coding, adaptive context-sensitive modeling, and near-optimal parsing to often achieve a slightly better compression ratio than [COMPRESSION_LZMA](compression_lzma.md). LZRAVEN uses an 8 MB dictionary and encodes faster than [COMPRESSION_LZMA](compression_lzma.md) while decoding 3x faster on Apple silicon, where the decoder leverages vector units to process multiple symbols per operation.

An LZRAVEN-encoded buffer begins with a stream header that encodes global encoder parameters, defines the quantized size of the LZ dictionary, and provides reserved feature flags for future extensions. The stream header is followed by a sequence of compressed or uncompressed blocks that are terminated by an empty block.

Each block begins with a header that encodes the block’s compressed size and feature flags. A block can be either compressed or stored uncompressed when compression would provide no benefit. LZRAVEN is practical for latency-sensitive workloads where [COMPRESSION_LZMA](compression_lzma.md) decode speed would be prohibitive.

LZRAVEN is available through the buffer API only — [compression_encode_buffer](compression_encode_buffer%28____________%29.md) and [compression_decode_buffer](compression_decode_buffer%28____________%29.md).

The decoder requires approximately 36 KB of scratch memory, making it well suited for memory-constrained environments.

> **Note**

> The `COMPRESSION_LZRAVEN` algorithm is available in version 27 or later of Apple operating systems.

## See Also

### Algorithm Constants

- [COMPRESSION_LZFSE](compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZ4_RAW](compression_lz4_raw.md): The LZ4 compression algorithm, without frame headers.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_ZLIB](compression_zlib.md): The zlib compression algorithm, which is recommended for cross-platform compression.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZMESH](compression_lzmesh.md): The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.
