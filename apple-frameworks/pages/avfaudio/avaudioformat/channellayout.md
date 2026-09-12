> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/channellayout](https://developer.apple.com/documentation/avfaudio/avaudioformat/channellayout)

# channelLayout (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The underlying audio channel layout.

## Declaration

```swift
var channelLayout: AVAudioChannelLayout? { get }
```

<a id="Discussion"></a>

## Discussion

Only formats with more than two channels require channel layouts.

## See Also

### Getting Audio Format Values

- [sampleRate](samplerate.md): The audio format sampling rate, in hertz.
- [channelCount](channelcount.md): The number of channels of audio data.
- [formatDescription](formatdescription.md): The audio format description to use with Core Media APIs.

# channelLayout (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The underlying audio channel layout.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAudioChannelLayout * channelLayout;
```

<a id="Discussion"></a>

## Discussion

Only formats with more than two channels require channel layouts.

## See Also

### Getting Audio Format Values

- [sampleRate](samplerate.md): The audio format sampling rate, in hertz.
- [channelCount](channelcount.md): The number of channels of audio data.
- [formatDescription](formatdescription.md): The audio format description to use with Core Media APIs.
