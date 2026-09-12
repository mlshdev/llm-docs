> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocompressioncontextdefaultchunksize()](https://developer.apple.com/documentation/metal/mtliocompressioncontextdefaultchunksize())

# MTLIOCompressionContextDefaultChunkSize() (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a compression chunk size you can use as a default for creating a compression context.

## Declaration

```swift
func MTLIOCompressionContextDefaultChunkSize() -> Int
```

## See Also

### Asset compression

- [MTLIOCreateCompressionContext(\_:\_:\_:)](mtliocreatecompressioncontext%28______%29.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOCompressionContextAppendData(\_:\_:\_:)](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOFlushAndDestroyCompressionContext(\_:)](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.

# MTLIOCompressionContextDefaultChunkSize (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a compression chunk size you can use as a default for creating a compression context.

## Declaration

```objectivec
extern size_t MTLIOCompressionContextDefaultChunkSize();
```

## See Also

### Asset compression

- [MTLIOCreateCompressionContext](mtliocreatecompressioncontext.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOCompressionContextAppendData](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOFlushAndDestroyCompressionContext](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.
