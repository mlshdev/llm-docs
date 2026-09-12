> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_algorithm](https://developer.apple.com/documentation/compression/compression_algorithm)

# compression_algorithm (Swift)

**Framework:** Compression  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure for values that represent compression algorithms.

## Declaration

```swift
struct compression_algorithm
```

<a id="overview"></a>

## Overview

Choose an algorithm according to the following guidelines:

- If speed and compression ratio are important, use [COMPRESSION_LZMESH](compression_lzmesh.md).
- If you require interoperability with non-Apple devices, use [COMPRESSION_ZLIB](compression_zlib.md).
- If speed is critical, and you’re willing to sacrifice compression ratio to achieve it, use [COMPRESSION_LZ4](compression_lz4.md).
- If compression ratio is critical, and you can sacrifice speed to achieve it, use [COMPRESSION_LZRAVEN](compression_lzraven.md). Note that [COMPRESSION_LZRAVEN](compression_lzraven.md) is an order of magnitude slower for both compression and decompression than other choices.

[COMPRESSION_LZMESH](compression_lzmesh.md) is faster than [COMPRESSION_ZLIB](compression_zlib.md) and generally achieves a better compression ratio. However, it’s slower than [COMPRESSION_LZ4](compression_lz4.md) and doesn’t compress as well as [COMPRESSION_LZRAVEN](compression_lzraven.md).

[COMPRESSION_LZBITMAP](compression_lzbitmap.md) provides a compression-ratio that’s between [COMPRESSION_LZ4](compression_lz4.md) and [COMPRESSION_LZMESH](compression_lzmesh.md). When compression ratio and performance are equally important, use [COMPRESSION_LZMESH](compression_lzmesh.md) to favor compression ratio and [COMPRESSION_LZBITMAP](compression_lzbitmap.md) to favor performance.

## Topics

### Algorithm Constants

- [COMPRESSION_LZFSE](compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZ4_RAW](compression_lz4_raw.md): The LZ4 compression algorithm, without frame headers.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_ZLIB](compression_zlib.md): The zlib compression algorithm, which is recommended for cross-platform compression.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZMESH](compression_lzmesh.md): The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.
- [COMPRESSION_LZRAVEN](compression_lzraven.md): The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.

### Initializers

- [init(\_:)](compression_algorithm/init%28__%29.md): Creates a new constant from the given raw value.
- [init(rawValue:)](compression_algorithm/init%28rawvalue_%29.md): Creates a new constant from the given raw value.

### Instance Properties

- [rawValue](compression_algorithm/rawvalue.md): The raw value of the constant.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Multiple-step compression

- [compression_stream](compression_stream.md): A structure representing a compression stream.
- [compression_stream_init(\_:\_:\_:)](compression_stream_init%28______%29.md): Initializes a compression stream for either compression or decompression.
- [compression_stream_process(\_:\_:)](compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_stream_destroy(\_:)](compression_stream_destroy%28__%29.md): Frees any memory allocated by stream initialization function.
- [compression_status](compression_status.md): A set of values used to represent the status of stream compression.
- [compression_stream_flags](compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression_stream_operation.md): A set of values used to represent a stream compression operation.

# compression_algorithm (Objective-C)

**Framework:** Compression  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure for values that represent compression algorithms.

## Declaration

```objectivec
typedef enum { ... } compression_algorithm;
```

<a id="overview"></a>

## Overview

Choose an algorithm according to the following guidelines:

- If speed and compression ratio are important, use [COMPRESSION_LZMESH](compression_lzmesh.md).
- If you require interoperability with non-Apple devices, use [COMPRESSION_ZLIB](compression_zlib.md).
- If speed is critical, and you’re willing to sacrifice compression ratio to achieve it, use [COMPRESSION_LZ4](compression_lz4.md).
- If compression ratio is critical, and you can sacrifice speed to achieve it, use [COMPRESSION_LZRAVEN](compression_lzraven.md). Note that [COMPRESSION_LZRAVEN](compression_lzraven.md) is an order of magnitude slower for both compression and decompression than other choices.

[COMPRESSION_LZMESH](compression_lzmesh.md) is faster than [COMPRESSION_ZLIB](compression_zlib.md) and generally achieves a better compression ratio. However, it’s slower than [COMPRESSION_LZ4](compression_lz4.md) and doesn’t compress as well as [COMPRESSION_LZRAVEN](compression_lzraven.md).

[COMPRESSION_LZBITMAP](compression_lzbitmap.md) provides a compression-ratio that’s between [COMPRESSION_LZ4](compression_lz4.md) and [COMPRESSION_LZMESH](compression_lzmesh.md). When compression ratio and performance are equally important, use [COMPRESSION_LZMESH](compression_lzmesh.md) to favor compression ratio and [COMPRESSION_LZBITMAP](compression_lzbitmap.md) to favor performance.

## Topics

### Algorithm Constants

- [COMPRESSION_LZFSE](compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
- [COMPRESSION_LZ4](compression_lz4.md): The LZ4 compression algorithm for fast compression.
- [COMPRESSION_LZ4_RAW](compression_lz4_raw.md): The LZ4 compression algorithm, without frame headers.
- [COMPRESSION_LZMA](compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
- [COMPRESSION_ZLIB](compression_zlib.md): The zlib compression algorithm, which is recommended for cross-platform compression.
- [COMPRESSION_BROTLI](compression_brotli.md): The Brotli compression algorithm, which is recommended for text compression.
- [COMPRESSION_LZBITMAP](compression_lzbitmap.md): The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.
- [COMPRESSION_LZMESH](compression_lzmesh.md): The LZMESH compression algorithm, which is recommended for fast, general-purpose compression on Apple platforms.
- [COMPRESSION_LZRAVEN](compression_lzraven.md): The LZRAVEN compression algorithm, which is recommended for high-compression ratio with fast decoding on Apple platforms.

## See Also

### Multiple-step compression

- [compression_stream](compression_stream.md): A structure representing a compression stream.
- [compression_stream_init](compression_stream_init%28______%29.md): Initializes a compression stream for either compression or decompression.
- [compression_stream_process](compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_stream_destroy](compression_stream_destroy%28__%29.md): Frees any memory allocated by stream initialization function.
- [compression_status](compression_status.md): A set of values used to represent the status of stream compression.
- [compression_stream_flags](compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression_stream_operation.md): A set of values used to represent a stream compression operation.
