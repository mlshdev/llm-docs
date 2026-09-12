> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/issoloed](https://developer.apple.com/documentation/avfaudio/avmusictrack/issoloed)

# isSoloed (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the track is in a soloed state.

## Declaration

```swift
var isSoloed: Bool { get set }
```

## See Also

### Configuring Music Track Properties

- [isMuted](ismuted.md): A Boolean value that indicates whether the track is in a muted state.
- [offsetTime](offsettime.md): The offset of the track’s start time, in beats.
- [timeResolution](timeresolution.md): The time resolution value for the sequence, in ticks (pulses) per quarter note.
- [usesAutomatedParameters](usesautomatedparameters.md): A Boolean value that indicates whether the track is an automation track.

# soloed (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the track is in a soloed state.

## Declaration

```objectivec
@property (nonatomic, getter=isSoloed) BOOL soloed;
```

## See Also

### Configuring Music Track Properties

- [muted](ismuted.md): A Boolean value that indicates whether the track is in a muted state.
- [offsetTime](offsettime.md): The offset of the track’s start time, in beats.
- [timeResolution](timeresolution.md): The time resolution value for the sequence, in ticks (pulses) per quarter note.
- [usesAutomatedParameters](usesautomatedparameters.md): A Boolean value that indicates whether the track is an automation track.
