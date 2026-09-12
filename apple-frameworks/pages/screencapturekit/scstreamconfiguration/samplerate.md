> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/samplerate](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/samplerate)

# sampleRate (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

The sample rate for audio capture.

## Declaration

```swift
var sampleRate: Int { get set }
```

<a id="discussion"></a>

## Discussion

The framework supports sample rates of `8000`, `16000`, `24000`, and `48000`. If you don’t specify a sample rate, or specify an unsupported value, the system uses a default sample rate of 48 kHz.

## See Also

### Configuring audio

- [capturesAudio](capturesaudio.md): A Boolean value that indicates whether to capture audio.
- [channelCount](channelcount.md): The number of audio channels to capture.
- [excludesCurrentProcessAudio](excludescurrentprocessaudio.md): A Boolean value that indicates whether to exclude audio from your app during capture.

# sampleRate (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

The sample rate for audio capture.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger sampleRate;
```

<a id="discussion"></a>

## Discussion

The framework supports sample rates of `8000`, `16000`, `24000`, and `48000`. If you don’t specify a sample rate, or specify an unsupported value, the system uses a default sample rate of 48 kHz.

## See Also

### Configuring audio

- [capturesAudio](capturesaudio.md): A Boolean value that indicates whether to capture audio.
- [channelCount](channelcount.md): The number of audio channels to capture.
- [excludesCurrentProcessAudio](excludescurrentprocessaudio.md): A Boolean value that indicates whether to exclude audio from your app during capture.
