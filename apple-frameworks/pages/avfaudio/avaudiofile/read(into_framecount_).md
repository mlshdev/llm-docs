> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile/read(into:framecount:)](https://developer.apple.com/documentation/avfaudio/avaudiofile/read(into:framecount:))

# read(into:frameCount:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads a portion of an audio buffer using the number of frames you specify.

## Declaration

```swift
func read(into buffer: AVAudioPCMBuffer, frameCount frames: AVAudioFrameCount) throws
```

## Parameters

- `buffer`: The buffer from which to read the file. Its format must match the file’s processing format.
- `frames`: The number of frames to read.

<a id="Discussion"></a>

## Discussion

You use this method to read fewer frames than the buffer’s `frameCapacity`.

## See Also

### Reading and Writing the Audio Buffer

- [read(into:)](read%28into_%29.md): Reads an entire audio buffer.
- [read(frameCount:)](read%28framecount_%29.md)
- [close()](close%28%29.md): Closes the audio file.

# readIntoBuffer:frameCount:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads a portion of an audio buffer using the number of frames you specify.

## Declaration

```objectivec
- (BOOL) readIntoBuffer:(AVAudioPCMBuffer *) buffer frameCount:(AVAudioFrameCount) frames error:(NSError **) outError;
```

## Parameters

- `buffer`: The buffer from which to read the file. Its format must match the file’s processing format.
- `frames`: The number of frames to read.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A value of [true](https://developer.apple.com/documentation/swift/true) on a successful read.

<a id="Discussion"></a>

## Discussion

You use this method to read fewer frames than the buffer’s `frameCapacity`.

## See Also

### Reading and Writing the Audio Buffer

- [readIntoBuffer:error:](read%28into_%29.md): Reads an entire audio buffer.
- [close](close%28%29.md): Closes the audio file.
