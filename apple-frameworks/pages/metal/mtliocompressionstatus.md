> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocompressionstatus](https://developer.apple.com/documentation/metal/mtliocompressionstatus)

# MTLIOCompressionStatus (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Represents the final state of a compression context.

## Declaration

```swift
enum MTLIOCompressionStatus
```

<a id="overview"></a>

## Overview

The [MTLIOFlushAndDestroyCompressionContext(\_:)](mtlioflushanddestroycompressioncontext%28__%29.md) returns an [MTLIOCompressionStatus](mtliocompressionstatus.md) instance to reflect the final state of a compression context.

## Topics

### Compression result states

- [MTLIOCompressionStatus.complete](mtliocompressionstatus/complete.md): Indicates the compression API successfully flushed and destroyed a compression context.
- [MTLIOCompressionStatus.error](mtliocompressionstatus/error.md): Indicates the compression API had an error while flushing and destroying a compression context.

### Initializers

- [init(rawValue:)](mtliocompressionstatus/init%28rawvalue_%29.md)

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
- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContextDefaultChunkSize()](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOCompressionContextAppendData(\_:\_:\_:)](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOFlushAndDestroyCompressionContext(\_:)](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.

# MTLIOCompressionStatus (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Represents the final state of a compression context.

## Declaration

```objectivec
enum MTLIOCompressionStatus : NSInteger;
```

<a id="overview"></a>

## Overview

The [MTLIOFlushAndDestroyCompressionContext](mtlioflushanddestroycompressioncontext%28__%29.md) returns an [MTLIOCompressionStatus](mtliocompressionstatus.md) instance to reflect the final state of a compression context.

## Topics

### Compression result states

- [MTLIOCompressionStatusComplete](mtliocompressionstatus/complete.md): Indicates the compression API successfully flushed and destroyed a compression context.
- [MTLIOCompressionStatusError](mtliocompressionstatus/error.md): Indicates the compression API had an error while flushing and destroying a compression context.

## See Also

### Asset compression

- [MTLIOCreateCompressionContext](mtliocreatecompressioncontext.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContextDefaultChunkSize](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOCompressionContextAppendData](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOFlushAndDestroyCompressionContext](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.
