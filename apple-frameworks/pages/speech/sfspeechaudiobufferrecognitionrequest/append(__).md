> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechaudiobufferrecognitionrequest/append(_:)](https://developer.apple.com/documentation/speech/sfspeechaudiobufferrecognitionrequest/append(_:))

# append(\_:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Appends audio in the PCM format to the end of the recognition request.

## Declaration

```swift
func append(_ audioPCMBuffer: AVAudioPCMBuffer)
```

## Parameters

- `audioPCMBuffer`: An audio buffer that contains audio in the PCM format.

<a id="discussion"></a>

## Discussion

The audio must be in a native format and uncompressed.

## See Also

### Appending Audio Buffers

- [appendAudioSampleBuffer(\_:)](appendaudiosamplebuffer%28__%29.md): Appends audio to the end of the recognition request.
- [endAudio()](endaudio%28%29.md): Marks the end of audio input for the recognition request.

# appendAudioPCMBuffer: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Appends audio in the PCM format to the end of the recognition request.

## Declaration

```objectivec
- (void) appendAudioPCMBuffer:(AVAudioPCMBuffer *) audioPCMBuffer;
```

## Parameters

- `audioPCMBuffer`: An audio buffer that contains audio in the PCM format.

<a id="discussion"></a>

## Discussion

The audio must be in a native format and uncompressed.

## See Also

### Appending Audio Buffers

- [appendAudioSampleBuffer:](appendaudiosamplebuffer%28__%29.md): Appends audio to the end of the recognition request.
- [endAudio](endaudio%28%29.md): Marks the end of audio input for the recognition request.
