> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/offsettime](https://developer.apple.com/documentation/avfaudio/avmusictrack/offsettime)

# offsetTime (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The offset of the track’s start time, in beats.

## Declaration

```swift
var offsetTime: AVMusicTimeStamp { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this value is `0`.

## See Also

### Configuring Music Track Properties

- [isMuted](ismuted.md): A Boolean value that indicates whether the track is in a muted state.
- [isSoloed](issoloed.md): A Boolean value that indicates whether the track is in a soloed state.
- [timeResolution](timeresolution.md): The time resolution value for the sequence, in ticks (pulses) per quarter note.
- [usesAutomatedParameters](usesautomatedparameters.md): A Boolean value that indicates whether the track is an automation track.

# offsetTime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The offset of the track’s start time, in beats.

## Declaration

```objectivec
@property (nonatomic) AVMusicTimeStamp offsetTime;
```

<a id="Discussion"></a>

## Discussion

By default, this value is `0`.

## See Also

### Configuring Music Track Properties

- [muted](ismuted.md): A Boolean value that indicates whether the track is in a muted state.
- [soloed](issoloed.md): A Boolean value that indicates whether the track is in a soloed state.
- [timeResolution](timeresolution.md): The time resolution value for the sequence, in ticks (pulses) per quarter note.
- [usesAutomatedParameters](usesautomatedparameters.md): A Boolean value that indicates whether the track is an automation track.
