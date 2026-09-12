> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechaudiobufferrecognitionrequest/appendaudiosamplebuffer(_:)](https://developer.apple.com/documentation/speech/sfspeechaudiobufferrecognitionrequest/appendaudiosamplebuffer(_:))

# appendAudioSampleBuffer(\_:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Appends audio to the end of the recognition request.

## Declaration

```swift
func appendAudioSampleBuffer(_ sampleBuffer: CMSampleBuffer)
```

## Parameters

- `sampleBuffer`: A buffer of audio.

<a id="discussion"></a>

## Discussion

The audio must be in a native format.

## See Also

### Appending Audio Buffers

- [append(\_:)](append%28__%29.md): Appends audio in the PCM format to the end of the recognition request.
- [endAudio()](endaudio%28%29.md): Marks the end of audio input for the recognition request.

# appendAudioSampleBuffer: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Appends audio to the end of the recognition request.

## Declaration

```objectivec
- (void) appendAudioSampleBuffer:(CMSampleBufferRef) sampleBuffer;
```

## Parameters

- `sampleBuffer`: A buffer of audio.

<a id="discussion"></a>

## Discussion

The audio must be in a native format.

## See Also

### Appending Audio Buffers

- [appendAudioPCMBuffer:](append%28__%29.md): Appends audio in the PCM format to the end of the recognition request.
- [endAudio](endaudio%28%29.md): Marks the end of audio input for the recognition request.
