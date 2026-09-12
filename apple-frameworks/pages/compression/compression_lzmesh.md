> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_lzmesh](https://developer.apple.com/documentation/compression/compression_lzmesh)

# COMPRESSION_LZMESH (Swift)

**Framework:** Compression  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.

## Declaration

```swift
var COMPRESSION_LZMESH: compression_algorithm { get }
```

<a id="Discussion"></a>

## Discussion

LZMESH is the Apple general-purpose compression algorithm, designed to replace both [COMPRESSION_LZFSE](compression_lzfse.md) and [COMPRESSION_ZLIB](compression_zlib.md) across Apple platforms. It combines LZ77 with length-limited Huffman coding and a lazy match parser to deliver better compression ratio than both [COMPRESSION_LZFSE](compression_lzfse.md) and [COMPRESSION_ZLIB](compression_zlib.md) while encoding significantly faster than either. LZMESH decodes 3.5x faster than [COMPRESSION_ZLIB](compression_zlib.md) on Apple silicon.

An LZMESH-encoded buffer is a sequence of blocks terminated by an end-of-stream marker. There are three block types:

- **Raw block**: A header followed by uncompressed bytes. The encoder emits raw blocks when the data is incompressible, so the output is never significantly larger than the input.
- **Compressed block**: A header followed by LZMESH-encoded data. Each block can represent up to 4 GB of uncompressed content.
- **End-of-stream block**: A single-byte marker that terminates the stream.

Each compressed block includes a footer that records block encoding parameters. Both headers and footers reserve flag bits for future format extensions.

LZMESH is available through the buffer API only — [compression_encode_buffer(\_:\_:\_:\_:\_:\_:)](compression_encode_buffer%28____________%29.md) and [compression_decode_buffer(\_:\_:\_:\_:\_:\_:)](compression_decode_buffer%28____________%29.md).

The decoder requires only 64 KB of scratch memory, making it well suited for memory-constrained environments.

> **Note**

> The `COMPRESSION_LZMESH` algorithm is available in version 27 or later of Apple operating systems.

## See Also

### Algorithm Constants

- [COMPRESSION_LZFSE](compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZ4_RAW](compression_lz4_raw.md): The LZ4 compression algorithm, without frame headers.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_ZLIB](compression_zlib.md): The zlib compression algorithm, which is recommended for cross-platform compression.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZRAVEN](compression_lzraven.md): The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.

# COMPRESSION_LZMESH (Objective-C)

**Framework:** Compression  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.

## Declaration

```objectivec
COMPRESSION_LZMESH
```

<a id="Discussion"></a>

## Discussion

LZMESH is the Apple general-purpose compression algorithm, designed to replace both [COMPRESSION_LZFSE](compression_lzfse.md) and [COMPRESSION_ZLIB](compression_zlib.md) across Apple platforms. It combines LZ77 with length-limited Huffman coding and a lazy match parser to deliver better compression ratio than both [COMPRESSION_LZFSE](compression_lzfse.md) and [COMPRESSION_ZLIB](compression_zlib.md) while encoding significantly faster than either. LZMESH decodes 3.5x faster than [COMPRESSION_ZLIB](compression_zlib.md) on Apple silicon.

An LZMESH-encoded buffer is a sequence of blocks terminated by an end-of-stream marker. There are three block types:

- **Raw block**: A header followed by uncompressed bytes. The encoder emits raw blocks when the data is incompressible, so the output is never significantly larger than the input.
- **Compressed block**: A header followed by LZMESH-encoded data. Each block can represent up to 4 GB of uncompressed content.
- **End-of-stream block**: A single-byte marker that terminates the stream.

Each compressed block includes a footer that records block encoding parameters. Both headers and footers reserve flag bits for future format extensions.

LZMESH is available through the buffer API only — [compression_encode_buffer](compression_encode_buffer%28____________%29.md) and [compression_decode_buffer](compression_decode_buffer%28____________%29.md).

The decoder requires only 64 KB of scratch memory, making it well suited for memory-constrained environments.

> **Note**

> The `COMPRESSION_LZMESH` algorithm is available in version 27 or later of Apple operating systems.

## See Also

### Algorithm Constants

- [COMPRESSION_LZFSE](compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZ4_RAW](compression_lz4_raw.md): The LZ4 compression algorithm, without frame headers.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_ZLIB](compression_zlib.md): The zlib compression algorithm, which is recommended for cross-platform compression.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZRAVEN](compression_lzraven.md): The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.
