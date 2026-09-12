> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/ksequencetrackproperty_mutestatus](https://developer.apple.com/documentation/audiotoolbox/ksequencetrackproperty_mutestatus)

# kSequenceTrackProperty_MuteStatus (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The mute/unmute state of a music track. By default this value is `false` (not muted). A read/write Boolean value.

## Declaration

```swift
var kSequenceTrackProperty_MuteStatus: UInt32 { get }
```

## See Also

### Constants

- [kSequenceTrackProperty_LoopInfo](ksequencetrackproperty_loopinfo.md): Looping information for a music track.
- [kSequenceTrackProperty_OffsetTime](ksequencetrackproperty_offsettime.md): A music track’s start time in terms of beat number.
- [kSequenceTrackProperty_SoloStatus](ksequencetrackproperty_solostatus.md): The solo/unsolo state of a music track. By default this value is `false` (not soloed). A read/write Boolean value.
- [kSequenceTrackProperty_AutomatedParameters](ksequencetrackproperty_automatedparameters.md): Indicates whether or not a music track’s purpose is audio unit parameter automation. If this property’s value is other than 0, music events in the track can only indicate points in an automation curve. A read/write `UInt32` value, where a value other than 0 indicates that the track is for parameter automation.
- [kSequenceTrackProperty_TrackLength](ksequencetrackproperty_tracklength.md): The time of the last music event in a music track, plus time required for note fade-outs and so on.
- [kSequenceTrackProperty_TimeResolution](ksequencetrackproperty_timeresolution.md): The time resolution for a sequence of music events. For example, this value can indicate the time resolution that was specified by the MIDI file used to construct a sequence.

# kSequenceTrackProperty_MuteStatus (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The mute/unmute state of a music track. By default this value is `false` (not muted). A read/write Boolean value.

## Declaration

```objectivec
kSequenceTrackProperty_MuteStatus
```

## See Also

### Constants

- [kSequenceTrackProperty_LoopInfo](ksequencetrackproperty_loopinfo.md): Looping information for a music track.
- [kSequenceTrackProperty_OffsetTime](ksequencetrackproperty_offsettime.md): A music track’s start time in terms of beat number.
- [kSequenceTrackProperty_SoloStatus](ksequencetrackproperty_solostatus.md): The solo/unsolo state of a music track. By default this value is `false` (not soloed). A read/write Boolean value.
- [kSequenceTrackProperty_AutomatedParameters](ksequencetrackproperty_automatedparameters.md): Indicates whether or not a music track’s purpose is audio unit parameter automation. If this property’s value is other than 0, music events in the track can only indicate points in an automation curve. A read/write `UInt32` value, where a value other than 0 indicates that the track is for parameter automation.
- [kSequenceTrackProperty_TrackLength](ksequencetrackproperty_tracklength.md): The time of the last music event in a music track, plus time required for note fade-outs and so on.
- [kSequenceTrackProperty_TimeResolution](ksequencetrackproperty_timeresolution.md): The time resolution for a sequence of music events. For example, this value can indicate the time resolution that was specified by the MIDI file used to construct a sequence.
