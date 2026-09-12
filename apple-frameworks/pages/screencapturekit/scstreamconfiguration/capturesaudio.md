> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/capturesaudio](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/capturesaudio)

# capturesAudio (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether to capture audio.

## Declaration

```swift
var capturesAudio: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A stream doesn’t capture audio by default. Set this value to [true](https://developer.apple.com/documentation/swift/true) if you require audio capture.

## See Also

### Configuring audio

- [sampleRate](samplerate.md): The sample rate for audio capture.
- [channelCount](channelcount.md): The number of audio channels to capture.
- [excludesCurrentProcessAudio](excludescurrentprocessaudio.md): A Boolean value that indicates whether to exclude audio from your app during capture.

# capturesAudio (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether to capture audio.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL capturesAudio;
```

<a id="discussion"></a>

## Discussion

A stream doesn’t capture audio by default. Set this value to [true](https://developer.apple.com/documentation/swift/true) if you require audio capture.

## See Also

### Configuring audio

- [sampleRate](samplerate.md): The sample rate for audio capture.
- [channelCount](channelcount.md): The number of audio channels to capture.
- [excludesCurrentProcessAudio](excludescurrentprocessaudio.md): A Boolean value that indicates whether to exclude audio from your app during capture.
