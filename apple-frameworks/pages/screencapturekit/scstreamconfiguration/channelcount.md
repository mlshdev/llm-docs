> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/channelcount](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/channelcount)

# channelCount (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

The number of audio channels to capture.

## Declaration

```swift
var channelCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

The framework supports channel counts of `1` (mono) or `2` (stereo). If you don’t specify a channel count, or specify an unsupported value, the system defaults to stereo audio capture.

## See Also

### Configuring audio

- [capturesAudio](capturesaudio.md): A Boolean value that indicates whether to capture audio.
- [sampleRate](samplerate.md): The sample rate for audio capture.
- [excludesCurrentProcessAudio](excludescurrentprocessaudio.md): A Boolean value that indicates whether to exclude audio from your app during capture.

# channelCount (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

The number of audio channels to capture.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger channelCount;
```

<a id="discussion"></a>

## Discussion

The framework supports channel counts of `1` (mono) or `2` (stereo). If you don’t specify a channel count, or specify an unsupported value, the system defaults to stereo audio capture.

## See Also

### Configuring audio

- [capturesAudio](capturesaudio.md): A Boolean value that indicates whether to capture audio.
- [sampleRate](samplerate.md): The sample rate for audio capture.
- [excludesCurrentProcessAudio](excludescurrentprocessaudio.md): A Boolean value that indicates whether to exclude audio from your app during capture.
