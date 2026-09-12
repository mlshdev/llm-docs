> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/analyzerinput/init(buffer:)-2ysg3](https://developer.apple.com/documentation/speech/analyzerinput/init(buffer:)-2ysg3)

# init(buffer:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates an audio input object.

## Declaration

```swift
init(buffer: AVAudioPCMBuffer)
```

## Parameters

- `buffer`: An audio buffer.

<a id="discussion"></a>

## Discussion

This audio buffer is assumed to start immediately after the previous buffer (or at time-code zero if there is no previous buffer).

## See Also

### Creating an input element

- [init(buffer:)](init%28buffer_%29-3nt02.md): Creates an audio input object.
- [init(buffer:bufferStartTime:)](init%28buffer_bufferstarttime_%29.md): Creates an audio input object for audio that may be discontiguous with previous input.
