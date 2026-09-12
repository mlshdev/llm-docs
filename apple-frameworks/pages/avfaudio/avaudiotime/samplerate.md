> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiotime/samplerate](https://developer.apple.com/documentation/avfaudio/avaudiotime/samplerate)

# sampleRate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The sampling rate that the sample time property expresses.

## Declaration

```swift
var sampleRate: Double { get }
```

## See Also

### Getting Sample Rate Information

- [sampleTime](sampletime.md): The time as a number of audio samples that the current audio device tracks.
- [isSampleTimeValid](issampletimevalid.md): A Boolean value that indicates whether the sample time and sample rate properties are in a valid state.

# sampleRate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The sampling rate that the sample time property expresses.

## Declaration

```objectivec
@property (nonatomic, readonly) double sampleRate;
```

## See Also

### Getting Sample Rate Information

- [sampleTime](sampletime.md): The time as a number of audio samples that the current audio device tracks.
- [sampleTimeValid](issampletimevalid.md): A Boolean value that indicates whether the sample time and sample rate properties are in a valid state.
