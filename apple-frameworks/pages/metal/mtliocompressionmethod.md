> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocompressionmethod](https://developer.apple.com/documentation/metal/mtliocompressionmethod)

# MTLIOCompressionMethod (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The compression codecs that Metal supports for input/output handles.

## Declaration

```swift
enum MTLIOCompressionMethod
```

<a id="overview"></a>

## Overview

For more information on the individual codecs, see the [Algorithm](../compression/algorithm.md) enumeration in the [Compression](../compression.md) framework.

## Topics

### Compression codecs

- [MTLIOCompressionMethod.zlib](mtliocompressionmethod/zlib.md): Indicates that a file uses the zlib compression algorithm codec.
- [MTLIOCompressionMethod.lzfse](mtliocompressionmethod/lzfse.md): Indicates that a file uses the LZFSE compression algorithm codec.
- [MTLIOCompressionMethod.lz4](mtliocompressionmethod/lz4.md): Indicates that a file uses the LZ4 compression algorithm codec.
- [MTLIOCompressionMethod.lzma](mtliocompressionmethod/lzma.md): Indicates that a file uses the LZMA compression algorithm codec.
- [MTLIOCompressionMethod.lzBitmap](mtliocompressionmethod/lzbitmap.md): Indicates that a file uses the LZBitmap compression algorithm codec.

### Initializers

- [init(rawValue:)](mtliocompressionmethod/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Asset compression

- [MTLIOCreateCompressionContext(\_:\_:\_:)](mtliocreatecompressioncontext%28______%29.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionContextDefaultChunkSize()](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOCompressionContextAppendData(\_:\_:\_:)](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOFlushAndDestroyCompressionContext(\_:)](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.

# MTLIOCompressionMethod (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The compression codecs that Metal supports for input/output handles.

## Declaration

```objectivec
enum MTLIOCompressionMethod : NSInteger;
```

<a id="overview"></a>

## Overview

For more information on the individual codecs, see the [Algorithm](../compression/algorithm.md) enumeration in the [Compression](../compression.md) framework.

## Topics

### Compression codecs

- [MTLIOCompressionMethodZlib](mtliocompressionmethod/zlib.md): Indicates that a file uses the zlib compression algorithm codec.
- [MTLIOCompressionMethodLZFSE](mtliocompressionmethod/lzfse.md): Indicates that a file uses the LZFSE compression algorithm codec.
- [MTLIOCompressionMethodLZ4](mtliocompressionmethod/lz4.md): Indicates that a file uses the LZ4 compression algorithm codec.
- [MTLIOCompressionMethodLZMA](mtliocompressionmethod/lzma.md): Indicates that a file uses the LZMA compression algorithm codec.
- [MTLIOCompressionMethodLZBitmap](mtliocompressionmethod/lzbitmap.md): Indicates that a file uses the LZBitmap compression algorithm codec.

## See Also

### Asset compression

- [MTLIOCreateCompressionContext](mtliocreatecompressioncontext.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionContextDefaultChunkSize](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOCompressionContextAppendData](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOFlushAndDestroyCompressionContext](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.
