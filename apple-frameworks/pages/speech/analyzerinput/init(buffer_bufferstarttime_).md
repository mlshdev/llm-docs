> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/analyzerinput/init(buffer:bufferstarttime:)](https://developer.apple.com/documentation/speech/analyzerinput/init(buffer:bufferstarttime:))

# init(buffer:bufferStartTime:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates an audio input object for audio that may be discontiguous with previous input.

## Declaration

```swift
init(buffer: AVAudioPCMBuffer, bufferStartTime: CMTime?)
```

## Parameters

- `buffer`: An audio buffer.
- `bufferStartTime`: The time-code of the start of the audio buffer. If `nil`, this audio buffer is assumed to start immediately after the previous buffer (or at time-code zero if there is no previous buffer). The `CMTime` can have a different timescale than the sample rate of the audio data.

<a id="discussion"></a>

## Discussion

The audio buffer must not overlap or precede other audio input, as determined by the `bufferStartTime` value.

> **Important**

> If the buffer is converted from other differently-formatted audio, ensure that the buffer’s start time is accurate.
>
> Some conversion algorithms can use a “priming” method that may shift some audio to a later converted buffer. This shift will misalign the original and converted audio buffers; the original buffer’s start time would not be usable as the `bufferStartTime` value for the converted buffer.

> **Tip**

> Convert an `AVAudioTime` instance to a `CMTime` instance with this code.
>
> ```swift
> CMTime(value: avAudioTime.sampleTime, timescale: CMTimeScale(avAudioTime.sampleRate))
> ```

## See Also

### Creating an input element

- [init(buffer:)](init%28buffer_%29-3nt02.md): Creates an audio input object.
- [init(buffer:)](init%28buffer_%29-2ysg3.md): Creates an audio input object.
