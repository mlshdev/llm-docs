> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/compressionalgorithm](https://developer.apple.com/documentation/foundation/nsdata/compressionalgorithm)

# NSData.CompressionAlgorithm (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An algorithm that indicates how to compress or decompress data.

## Declaration

```swift
enum CompressionAlgorithm
```

<a id="overview"></a>

## Overview

Choose an algorithm that best suits the needs of your app:

- [NSData.CompressionAlgorithm.lzfse](compressionalgorithm/lzfse.md) — The algorithm offers faster speed and generally achieves better compression than   [NSData.CompressionAlgorithm.zlib](compressionalgorithm/zlib.md). However, it is slower than [NSData.CompressionAlgorithm.lz4](compressionalgorithm/lz4.md) and doesn’t compress as well as [NSData.CompressionAlgorithm.lzma](compressionalgorithm/lzma.md).
- [NSData.CompressionAlgorithm.zlib](compressionalgorithm/zlib.md) — Use this algorithm if your app requires interoperability with non-Apple devices. For example, if you are transferering data to another device where it needs to be compressed or decompressed.
- [NSData.CompressionAlgorithm.lz4](compressionalgorithm/lz4.md) — Use this algorithm if speed is critical, and you’re willing to sacrifice compression ratio to achieve it.
- [NSData.CompressionAlgorithm.lzma](compressionalgorithm/lzma.md) — Use this algorithm if compression ratio is critical, and you’re willing to sacrifice speed to achieve it. It is an order of magnitude slower for both compression and decompression than other choices.

## Topics

### Algorithms

- [NSData.CompressionAlgorithm.lz4](compressionalgorithm/lz4.md): The LZ4 compression algorithm, recommended for fast compression.
- [NSData.CompressionAlgorithm.lzfse](compressionalgorithm/lzfse.md): The LZFSE compression algorithm, recommended for use on Apple platforms.
- [NSData.CompressionAlgorithm.lzma](compressionalgorithm/lzma.md): The LZMA compression algorithm, recommended for high-compression ratio.
- [NSData.CompressionAlgorithm.zlib](compressionalgorithm/zlib.md): The zlib compression algorithm, recommended for cross-platform compression.

### Initializers

- [init(rawValue:)](compressionalgorithm/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Compressing and Decompressing Data

- [compressed(using:)](compressed%28using_%29.md): Returns a new data object by compressing the data object’s bytes.
- [decompressed(using:)](decompressed%28using_%29.md): Returns a new data object by decompressing data object’s bytes.
- [NSCompressionErrorMaximum](../nscompressionerrormaximum-swift.var.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionErrorMinimum](../nscompressionerrorminimum-swift.var.md): The start of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](../nscompressionfailederror-swift.var.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](../nsdecompressionfailederror-swift.var.md): An error code value that indicates a failure to decompress data using the provided algorithm.

# NSDataCompressionAlgorithm (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An algorithm that indicates how to compress or decompress data.

## Declaration

```objectivec
enum NSDataCompressionAlgorithm : NSInteger;
```

<a id="overview"></a>

## Overview

Choose an algorithm that best suits the needs of your app:

- [NSDataCompressionAlgorithmLZFSE](compressionalgorithm/lzfse.md) — The algorithm offers faster speed and generally achieves better compression than   [NSDataCompressionAlgorithmZlib](compressionalgorithm/zlib.md). However, it is slower than [NSDataCompressionAlgorithmLZ4](compressionalgorithm/lz4.md) and doesn’t compress as well as [NSDataCompressionAlgorithmLZMA](compressionalgorithm/lzma.md).
- [NSDataCompressionAlgorithmZlib](compressionalgorithm/zlib.md) — Use this algorithm if your app requires interoperability with non-Apple devices. For example, if you are transferering data to another device where it needs to be compressed or decompressed.
- [NSDataCompressionAlgorithmLZ4](compressionalgorithm/lz4.md) — Use this algorithm if speed is critical, and you’re willing to sacrifice compression ratio to achieve it.
- [NSDataCompressionAlgorithmLZMA](compressionalgorithm/lzma.md) — Use this algorithm if compression ratio is critical, and you’re willing to sacrifice speed to achieve it. It is an order of magnitude slower for both compression and decompression than other choices.

## Topics

### Algorithms

- [NSDataCompressionAlgorithmLZ4](compressionalgorithm/lz4.md): The LZ4 compression algorithm, recommended for fast compression.
- [NSDataCompressionAlgorithmLZFSE](compressionalgorithm/lzfse.md): The LZFSE compression algorithm, recommended for use on Apple platforms.
- [NSDataCompressionAlgorithmLZMA](compressionalgorithm/lzma.md): The LZMA compression algorithm, recommended for high-compression ratio.
- [NSDataCompressionAlgorithmZlib](compressionalgorithm/zlib.md): The zlib compression algorithm, recommended for cross-platform compression.

## See Also

### Compressing and Decompressing Data

- [compressedDataUsingAlgorithm:error:](compressed%28using_%29.md): Returns a new data object by compressing the data object’s bytes.
- [decompressedDataUsingAlgorithm:error:](decompressed%28using_%29.md): Returns a new data object by decompressing data object’s bytes.
