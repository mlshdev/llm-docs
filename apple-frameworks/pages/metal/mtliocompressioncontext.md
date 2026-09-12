> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocompressioncontext](https://developer.apple.com/documentation/metal/mtliocompressioncontext)

# MTLIOCompressionContext (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A pointer that represents the state of a file compression session in progress.

## Declaration

```swift
typealias MTLIOCompressionContext = UnsafeMutableRawPointer
```

## See Also

### Asset compression

- [MTLIOCreateCompressionContext(\_:\_:\_:)](mtliocreatecompressioncontext%28______%29.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContextDefaultChunkSize()](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContextAppendData(\_:\_:\_:)](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOFlushAndDestroyCompressionContext(\_:)](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.

# MTLIOCompressionContext (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A pointer that represents the state of a file compression session in progress.

## Declaration

```objectivec
typedef void * MTLIOCompressionContext;
```

## See Also

### Asset compression

- [MTLIOCreateCompressionContext](mtliocreatecompressioncontext.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContextDefaultChunkSize](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContextAppendData](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOFlushAndDestroyCompressionContext](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.
