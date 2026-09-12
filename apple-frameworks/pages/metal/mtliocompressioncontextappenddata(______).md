> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocompressioncontextappenddata(_:_:_:)](https://developer.apple.com/documentation/metal/mtliocompressioncontextappenddata(_:_:_:))

# MTLIOCompressionContextAppendData(\_:\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Adds data to a compression context.

## Declaration

```swift
func MTLIOCompressionContextAppendData(_ context: MTLIOCompressionContext, _ data: UnsafeRawPointer, _ size: Int)
```

## Parameters

- `context`: An [MTLIOCompressionContext](mtliocompressioncontext.md) instance that you create with the [MTLIOCreateCompressionContext(\_:\_:\_:)](mtliocreatecompressioncontext%28______%29.md) function.
- `data`: A pointer to memory that contains the data the function adds to the compression context.
- `size`: The number of bytes the function adds to the compression context from the data pointer.

## See Also

### Asset compression

- [MTLIOCreateCompressionContext(\_:\_:\_:)](mtliocreatecompressioncontext%28______%29.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContextDefaultChunkSize()](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOFlushAndDestroyCompressionContext(\_:)](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.

# MTLIOCompressionContextAppendData (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Adds data to a compression context.

## Declaration

```objectivec
extern void MTLIOCompressionContextAppendData(MTLIOCompressionContext context, const void *data, size_t size);
```

## Parameters

- `context`: An [MTLIOCompressionContext](mtliocompressioncontext.md) instance that you create with the [MTLIOCreateCompressionContext(\_:\_:\_:)](mtliocreatecompressioncontext%28______%29.md) function.
- `data`: A pointer to memory that contains the data the function adds to the compression context.
- `size`: The number of bytes the function adds to the compression context from the data pointer.

## See Also

### Asset compression

- [MTLIOCreateCompressionContext](mtliocreatecompressioncontext.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContextDefaultChunkSize](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOFlushAndDestroyCompressionContext](mtlioflushanddestroycompressioncontext%28__%29.md): Finishes compressing and saves the file that a compression context represents.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.
