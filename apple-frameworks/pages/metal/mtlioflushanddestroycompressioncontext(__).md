> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlioflushanddestroycompressioncontext(_:)](https://developer.apple.com/documentation/metal/mtlioflushanddestroycompressioncontext(_:))

# MTLIOFlushAndDestroyCompressionContext(\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Finishes compressing and saves the file that a compression context represents.

## Declaration

```swift
func MTLIOFlushAndDestroyCompressionContext(_ context: MTLIOCompressionContext) -> MTLIOCompressionStatus
```

## Parameters

- `context`: A compression context that you create with the [MTLIOCreateCompressionContext(\_:\_:\_:)](mtliocreatecompressioncontext%28______%29.md) function.

<a id="return-value"></a>

## Return Value

An [MTLIOCompressionStatus](mtliocompressionstatus.md) instance.

## See Also

### Asset compression

- [MTLIOCreateCompressionContext(\_:\_:\_:)](mtliocreatecompressioncontext%28______%29.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContextDefaultChunkSize()](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOCompressionContextAppendData(\_:\_:\_:)](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.

# MTLIOFlushAndDestroyCompressionContext (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Finishes compressing and saves the file that a compression context represents.

## Declaration

```objectivec
extern MTLIOCompressionStatus MTLIOFlushAndDestroyCompressionContext(MTLIOCompressionContext context);
```

## Parameters

- `context`: A compression context that you create with the [MTLIOCreateCompressionContext(\_:\_:\_:)](mtliocreatecompressioncontext%28______%29.md) function.

<a id="return-value"></a>

## Return Value

An [MTLIOCompressionStatus](mtliocompressionstatus.md) instance.

## See Also

### Asset compression

- [MTLIOCreateCompressionContext](mtliocreatecompressioncontext.md): Creates a compression context that you use to compress data into a single file.
- [MTLIOCompressionMethod](mtliocompressionmethod.md): The compression codecs that Metal supports for input/output handles.
- [MTLIOCompressionContextDefaultChunkSize](mtliocompressioncontextdefaultchunksize%28%29.md): Returns a compression chunk size you can use as a default for creating a compression context.
- [MTLIOCompressionContext](mtliocompressioncontext.md): A pointer that represents the state of a file compression session in progress.
- [MTLIOCompressionContextAppendData](mtliocompressioncontextappenddata%28______%29.md): Adds data to a compression context.
- [MTLIOCompressionStatus](mtliocompressionstatus.md): Represents the final state of a compression context.
