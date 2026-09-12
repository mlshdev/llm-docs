> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiotime/sampletime](https://developer.apple.com/documentation/avfaudio/avaudiotime/sampletime)

# sampleTime (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time as a number of audio samples that the current audio device tracks.

## Declaration

```swift
var sampleTime: AVAudioFramePosition { get }
```

## See Also

### Getting Sample Rate Information

- [sampleRate](samplerate.md): The sampling rate that the sample time property expresses.
- [isSampleTimeValid](issampletimevalid.md): A Boolean value that indicates whether the sample time and sample rate properties are in a valid state.

# sampleTime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time as a number of audio samples that the current audio device tracks.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioFramePosition sampleTime;
```

## See Also

### Getting Sample Rate Information

- [sampleRate](samplerate.md): The sampling rate that the sample time property expresses.
- [sampleTimeValid](issampletimevalid.md): A Boolean value that indicates whether the sample time and sample rate properties are in a valid state.
