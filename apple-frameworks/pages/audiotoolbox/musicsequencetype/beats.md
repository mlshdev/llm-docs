> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicsequencetype/beats](https://developer.apple.com/documentation/audiotoolbox/musicsequencetype/beats)

# MusicSequenceType.beats (Swift)

**Framework:** Audio Toolbox  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Used for a music sequence that corresponds to a normal MIDI file. The tempo track defines the number of beats per second and can have multiple tempo events.

## Declaration

```swift
case beats
```

## See Also

### Constants

- [MusicSequenceType.seconds](seconds.md): Used for a music sequence that corresponds to a MIDI file, but employs SMPTE timecode. The tempo track contains a single tempo event that specifies 60 beat-per-minute.
- [MusicSequenceType.samples](samples.md): Used for audio samples; a music sequence of this type cannot be saved to a MIDI file. The tempo track contains a single tempo event that specifies an audio sample rate in samples-per-second.

# kMusicSequenceType_Beats (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Used for a music sequence that corresponds to a normal MIDI file. The tempo track defines the number of beats per second and can have multiple tempo events.

## Declaration

```objectivec
kMusicSequenceType_Beats
```

## See Also

### Constants

- [kMusicSequenceType_Seconds](seconds.md): Used for a music sequence that corresponds to a MIDI file, but employs SMPTE timecode. The tempo track contains a single tempo event that specifies 60 beat-per-minute.
- [kMusicSequenceType_Samples](samples.md): Used for audio samples; a music sequence of this type cannot be saved to a MIDI file. The tempo track contains a single tempo event that specifies an audio sample rate in samples-per-second.
