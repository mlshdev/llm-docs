> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile/read(into:)](https://developer.apple.com/documentation/avfaudio/avaudiofile/read(into:))

# read(into:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads an entire audio buffer.

## Declaration

```swift
func read(into buffer: AVAudioPCMBuffer) throws
```

## Parameters

- `buffer`: The buffer from which to read the file. Its format must match the file’s processing format.

<a id="Discussion"></a>

## Discussion

When reading sequentially from the [framePosition](frameposition.md) property, the method attempts to fill the buffer to its capacity. On return, the buffer’s [length](length.md) property indicates the number of sample frames it successfully reads.

## See Also

### Related Documentation

- [framePosition](frameposition.md): The position in the file where the next read or write operation occurs.
- [length](length.md): The number of sample frames in the file.

### Reading and Writing the Audio Buffer

- [read(into:frameCount:)](read%28into_framecount_%29.md): Reads a portion of an audio buffer using the number of frames you specify.
- [read(frameCount:)](read%28framecount_%29.md)
- [close()](close%28%29.md): Closes the audio file.

# readIntoBuffer:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads an entire audio buffer.

## Declaration

```objectivec
- (BOOL) readIntoBuffer:(AVAudioPCMBuffer *) buffer error:(NSError **) outError;
```

## Parameters

- `buffer`: The buffer from which to read the file. Its format must match the file’s processing format.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A value of [true](https://developer.apple.com/documentation/swift/true) on a successful read.

<a id="Discussion"></a>

## Discussion

When reading sequentially from the [framePosition](frameposition.md) property, the method attempts to fill the buffer to its capacity. On return, the buffer’s [length](length.md) property indicates the number of sample frames it successfully reads.

## See Also

### Related Documentation

- [framePosition](frameposition.md): The position in the file where the next read or write operation occurs.
- [length](length.md): The number of sample frames in the file.

### Reading and Writing the Audio Buffer

- [readIntoBuffer:frameCount:error:](read%28into_framecount_%29.md): Reads a portion of an audio buffer using the number of frames you specify.
- [close](close%28%29.md): Closes the audio file.
