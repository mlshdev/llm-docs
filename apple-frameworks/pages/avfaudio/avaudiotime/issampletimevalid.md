> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiotime/issampletimevalid](https://developer.apple.com/documentation/avfaudio/avaudiotime/issampletimevalid)

# isSampleTimeValid (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the sample time and sample rate properties are in a valid state.

## Declaration

```swift
var isSampleTimeValid: Bool { get }
```

## See Also

### Getting Sample Rate Information

- [sampleRate](samplerate.md): The sampling rate that the sample time property expresses.
- [sampleTime](sampletime.md): The time as a number of audio samples that the current audio device tracks.

# sampleTimeValid (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the sample time and sample rate properties are in a valid state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSampleTimeValid) BOOL sampleTimeValid;
```

## See Also

### Getting Sample Rate Information

- [sampleRate](samplerate.md): The sampling rate that the sample time property expresses.
- [sampleTime](sampletime.md): The time as a number of audio samples that the current audio device tracks.
