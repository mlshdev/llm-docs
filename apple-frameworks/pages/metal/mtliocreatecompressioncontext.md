> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocreatecompressioncontext](https://developer.apple.com/documentation/metal/mtliocreatecompressioncontext)

# MTLIOCreateCompressionContext

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a compression context that you use to compress data into a single file.

## Declaration

```objectivec
extern MTLIOCompressionContextMTLIOCreateCompressionContext(const char *path, MTLIOCompressionMethod type, size_t chunkSize);
```

## Parameters

- `path`: A location in the file system where the function creates the new, compressed file.
- `type`: A compression codec the function uses to compress data resource file’s compression format.
- `chunkSize`: The number of uncompressed bytes the compression codec compresses at a time.

## See Also

### Asset compression

- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContextDefaultChunkSize](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOCompressionContextAppendData](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOFlushAndDestroyCompressionContext](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.
