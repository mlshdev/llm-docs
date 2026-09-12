> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_lzfse](https://developer.apple.com/documentation/compression/compression_lzfse)

# COMPRESSION_LZFSE (Swift)

**Framework:** Compression  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The LZFSE compression algorithm, which is recommended for use on Apple platforms.

## Declaration

```swift
var COMPRESSION_LZFSE: compression_algorithm { get }
```

<a id="Discussion"></a>

## Discussion

LZFSE is the Apple proprietary, general-purpose compression algorithm. It pairs an LZ77-style match finder with Finite State Entropy (FSE, a variant of tabled Asymmetric Numeral Systems) to encode literals and match metadata, which lets it match the compression ratio of [COMPRESSION_ZLIB](compression_zlib.md) (zlib level 5) while running 2x to 3x faster for both encoding and decoding. LZFSE is also substantially more energy-efficient than [COMPRESSION_ZLIB](compression_zlib.md), which makes it a good default for mobile and battery-powered devices.

LZFSE sits at a balanced point in the speed-ratio tradeoff: it compresses better than [COMPRESSION_LZ4](compression_lz4.md) and runs faster than [COMPRESSION_ZLIB](compression_zlib.md) or [COMPRESSION_LZMA](compression_lzma.md), but doesn’t match the ratio of [COMPRESSION_LZMA](compression_lzma.md) or the raw throughput of [COMPRESSION_LZ4](compression_lz4.md). For new Apple-only code, prefer [COMPRESSION_LZMESH](compression_lzmesh.md) — it typically compresses a bit better than LZFSE, encodes significantly faster, and decodes slightly faster.

If a payload needs to be decoded on another platform such as Linux or Windows, use [COMPRESSION_LZ4](compression_lz4.md), [COMPRESSION_LZMA](compression_lzma.md), or [COMPRESSION_ZLIB](compression_zlib.md) instead. Apple does publish an open-source LZFSE reference implementation, but it isn’t as widely available as [COMPRESSION_ZLIB](compression_zlib.md) or [COMPRESSION_LZMA](compression_lzma.md).

LZFSE is supported by both the buffer API — [compression_encode_buffer(\_:\_:\_:\_:\_:\_:)](compression_encode_buffer%28____________%29.md) and [compression_decode_buffer(\_:\_:\_:\_:\_:\_:)](compression_decode_buffer%28____________%29.md) — and the streaming API via [compression_stream_init(\_:\_:\_:)](compression_stream_init%28______%29.md), so you can use it for in-memory payloads or for processing data incrementally as it arrives.

## See Also

### Algorithm Constants

- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZ4_RAW](compression_lz4_raw.md): The LZ4 compression algorithm, without frame headers.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_ZLIB](compression_zlib.md): The zlib compression algorithm, which is recommended for cross-platform compression.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZMESH](compression_lzmesh.md): The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.
- [COMPRESSION_LZRAVEN](compression_lzraven.md): The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.

# COMPRESSION_LZFSE (Objective-C)

**Framework:** Compression  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The LZFSE compression algorithm, which is recommended for use on Apple platforms.

## Declaration

```objectivec
COMPRESSION_LZFSE
```

<a id="Discussion"></a>

## Discussion

LZFSE is the Apple proprietary, general-purpose compression algorithm. It pairs an LZ77-style match finder with Finite State Entropy (FSE, a variant of tabled Asymmetric Numeral Systems) to encode literals and match metadata, which lets it match the compression ratio of [COMPRESSION_ZLIB](compression_zlib.md) (zlib level 5) while running 2x to 3x faster for both encoding and decoding. LZFSE is also substantially more energy-efficient than [COMPRESSION_ZLIB](compression_zlib.md), which makes it a good default for mobile and battery-powered devices.

LZFSE sits at a balanced point in the speed-ratio tradeoff: it compresses better than [COMPRESSION_LZ4](compression_lz4.md) and runs faster than [COMPRESSION_ZLIB](compression_zlib.md) or [COMPRESSION_LZMA](compression_lzma.md), but doesn’t match the ratio of [COMPRESSION_LZMA](compression_lzma.md) or the raw throughput of [COMPRESSION_LZ4](compression_lz4.md). For new Apple-only code, prefer [COMPRESSION_LZMESH](compression_lzmesh.md) — it typically compresses a bit better than LZFSE, encodes significantly faster, and decodes slightly faster.

If a payload needs to be decoded on another platform such as Linux or Windows, use [COMPRESSION_LZ4](compression_lz4.md), [COMPRESSION_LZMA](compression_lzma.md), or [COMPRESSION_ZLIB](compression_zlib.md) instead. Apple does publish an open-source LZFSE reference implementation, but it isn’t as widely available as [COMPRESSION_ZLIB](compression_zlib.md) or [COMPRESSION_LZMA](compression_lzma.md).

LZFSE is supported by both the buffer API — [compression_encode_buffer](compression_encode_buffer%28____________%29.md) and [compression_decode_buffer](compression_decode_buffer%28____________%29.md) — and the streaming API via [compression_stream_init](compression_stream_init%28______%29.md), so you can use it for in-memory payloads or for processing data incrementally as it arrives.

## See Also

### Algorithm Constants

- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZ4_RAW](compression_lz4_raw.md): The LZ4 compression algorithm, without frame headers.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_ZLIB](compression_zlib.md): The zlib compression algorithm, which is recommended for cross-platform compression.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZMESH](compression_lzmesh.md): The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.
- [COMPRESSION_LZRAVEN](compression_lzraven.md): The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.
