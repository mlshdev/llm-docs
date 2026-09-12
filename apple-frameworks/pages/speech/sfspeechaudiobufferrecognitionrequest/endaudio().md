> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechaudiobufferrecognitionrequest/endaudio()](https://developer.apple.com/documentation/speech/sfspeechaudiobufferrecognitionrequest/endaudio())

# endAudio() (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Marks the end of audio input for the recognition request.

## Declaration

```swift
func endAudio()
```

<a id="discussion"></a>

## Discussion

Call this method explicitly to let the speech recognizer know that no more audio input is coming.

## See Also

### Appending Audio Buffers

- [append(\_:)](append%28__%29.md): Appends audio in the PCM format to the end of the recognition request.
- [appendAudioSampleBuffer(\_:)](appendaudiosamplebuffer%28__%29.md): Appends audio to the end of the recognition request.

# endAudio (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Marks the end of audio input for the recognition request.

## Declaration

```objectivec
- (void) endAudio;
```

<a id="discussion"></a>

## Discussion

Call this method explicitly to let the speech recognizer know that no more audio input is coming.

## See Also

### Appending Audio Buffers

- [appendAudioPCMBuffer:](append%28__%29.md): Appends audio in the PCM format to the end of the recognition request.
- [appendAudioSampleBuffer:](appendaudiosamplebuffer%28__%29.md): Appends audio to the end of the recognition request.
