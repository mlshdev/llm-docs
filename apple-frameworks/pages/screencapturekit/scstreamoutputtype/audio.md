> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamoutputtype/audio](https://developer.apple.com/documentation/screencapturekit/scstreamoutputtype/audio)

# SCStreamOutputType.audio (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

An output type that represents an audio capture sample buffer.

## Declaration

```swift
case audio
```

<a id="discussion"></a>

## Discussion

A captured sample buffer wraps an [AudioBufferList](../../coreaudiotypes/audiobufferlist.md) structure that contains the audio samples. The stream configuration’s [sampleRate](../scstreamconfiguration/samplerate.md) and [channelCount](../scstreamconfiguration/channelcount.md) property values determine of the format of the audio.

## See Also

### Output types

- [SCStreamOutputType.screen](screen.md): An output type that represents a screen capture sample buffer.

# SCStreamOutputTypeAudio (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

An output type that represents an audio capture sample buffer.

## Declaration

```objectivec
SCStreamOutputTypeAudio
```

<a id="discussion"></a>

## Discussion

A captured sample buffer wraps an [AudioBufferList](../../coreaudiotypes/audiobufferlist.md) structure that contains the audio samples. The stream configuration’s [sampleRate](../scstreamconfiguration/samplerate.md) and [channelCount](../scstreamconfiguration/channelcount.md) property values determine of the format of the audio.

## See Also

### Output types

- [SCStreamOutputTypeScreen](screen.md): An output type that represents a screen capture sample buffer.
