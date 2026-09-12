> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_zlib](https://developer.apple.com/documentation/compression/compression_zlib)

# COMPRESSION_ZLIB (Swift)

**Framework:** Compression  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The zlib compression algorithm, which is recommended for cross-platform compression.

## Declaration

```swift
var COMPRESSION_ZLIB: compression_algorithm { get }
```

<a id="Discussion"></a>

## Discussion

The Compression library implements the zlib encoder at level 5 only.  This compression level provides a good balance between compression speed and compression ratio.  The zlib decoder supports decoding data compressed with any compression level.

The encoded format is the raw `DEFLATE` format as described in [IETF RFC 1951](https://www.ietf.org/rfc/rfc1951.txt), the following obtains the equivalent configuration of the encoder:

```c
deflateInit2(zstream,5,Z_DEFLATED,-15,8,Z_DEFAULT_STRATEGY)
```

## See Also

### Algorithm Constants

- [COMPRESSION_LZFSE](compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZ4_RAW](compression_lz4_raw.md): The LZ4 compression algorithm, without frame headers.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZMESH](compression_lzmesh.md): The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.
- [COMPRESSION_LZRAVEN](compression_lzraven.md): The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.

# COMPRESSION_ZLIB (Objective-C)

**Framework:** Compression  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The zlib compression algorithm, which is recommended for cross-platform compression.

## Declaration

```objectivec
COMPRESSION_ZLIB
```

<a id="Discussion"></a>

## Discussion

The Compression library implements the zlib encoder at level 5 only.  This compression level provides a good balance between compression speed and compression ratio.  The zlib decoder supports decoding data compressed with any compression level.

The encoded format is the raw `DEFLATE` format as described in [IETF RFC 1951](https://www.ietf.org/rfc/rfc1951.txt), the following obtains the equivalent configuration of the encoder:

```c
deflateInit2(zstream,5,Z_DEFLATED,-15,8,Z_DEFAULT_STRATEGY)
```

## See Also

### Algorithm Constants

- [COMPRESSION_LZFSE](compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZ4_RAW](compression_lz4_raw.md): The LZ4 compression algorithm, without frame headers.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZMESH](compression_lzmesh.md): The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.
- [COMPRESSION_LZRAVEN](compression_lzraven.md): The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.
