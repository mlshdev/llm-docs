> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioformat/formatdescription

# formatDescription (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio format description to use with Core Media APIs.

## Declaration

```swift
var formatDescription: CMAudioFormatDescription { get }
```

## See Also

### Getting Audio Format Values

- [sampleRate](samplerate.md): The audio format sampling rate, in hertz.
- [channelCount](channelcount.md): The number of channels of audio data.
- [channelLayout](channellayout.md): The underlying audio channel layout.

# formatDescription (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio format description to use with Core Media APIs.

## Declaration

```objectivec
@property (nonatomic, readonly) CMAudioFormatDescriptionRef formatDescription;
```

## See Also

### Getting Audio Format Values

- [sampleRate](samplerate.md): The audio format sampling rate, in hertz.
- [channelCount](channelcount.md): The number of channels of audio data.
- [channelLayout](channellayout.md): The underlying audio channel layout.
