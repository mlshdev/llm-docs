> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/bestavailableaudioformat(compatiblewith:considering:)](https://developer.apple.com/documentation/speech/speechanalyzer/bestavailableaudioformat(compatiblewith:considering:))

# bestAvailableAudioFormat(compatibleWith:considering:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Retrieves the best-quality audio format that the specified modules can work with, taking into account the natural format of the audio and assets installed on the device.

## Declaration

```swift
static func bestAvailableAudioFormat(compatibleWith modules: [any SpeechModule], considering naturalFormat: AVAudioFormat?) async -> AVAudioFormat?
```

## Parameters

- `modules`: A list of modules that will be analyzing the audio.
- `naturalFormat`: An audio format that you prefer to work with, or `nil` if you have no preference.

<a id="return-value"></a>

## Return Value

`nil` if the specified modules require you to install additional assets.

<a id="discussion"></a>

## Discussion

Use this method to set up an audio pipeline or pre-convert audio to a usable format. In order to keep `CMTime` values sample-accurate, the analyzer does not transparently upsample, downsample, or convert audio input.

## See Also

### Determining audio formats

- [bestAvailableAudioFormat(compatibleWith:)](bestavailableaudioformat%28compatiblewith_%29.md): Retrieves the best-quality audio format that the specified modules can work with, from assets installed on the device.
