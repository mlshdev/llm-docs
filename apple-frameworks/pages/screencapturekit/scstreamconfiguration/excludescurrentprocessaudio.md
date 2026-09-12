> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/excludescurrentprocessaudio](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/excludescurrentprocessaudio)

# excludesCurrentProcessAudio (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether to exclude audio from your app during capture.

## Declaration

```swift
var excludesCurrentProcessAudio: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If you include your app process in the stream output, you can set this value to [true](https://developer.apple.com/documentation/swift/true) to exclude its audio.

## See Also

### Configuring audio

- [capturesAudio](capturesaudio.md): A Boolean value that indicates whether to capture audio.
- [sampleRate](samplerate.md): The sample rate for audio capture.
- [channelCount](channelcount.md): The number of audio channels to capture.

# excludesCurrentProcessAudio (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 13.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether to exclude audio from your app during capture.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL excludesCurrentProcessAudio;
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If you include your app process in the stream output, you can set this value to [true](https://developer.apple.com/documentation/swift/true) to exclude its audio.

## See Also

### Configuring audio

- [capturesAudio](capturesaudio.md): A Boolean value that indicates whether to capture audio.
- [sampleRate](samplerate.md): The sample rate for audio capture.
- [channelCount](channelcount.md): The number of audio channels to capture.
