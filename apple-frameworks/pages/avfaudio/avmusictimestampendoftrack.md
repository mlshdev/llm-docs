> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avmusictimestampendoftrack

# AVMusicTimeStampEndOfTrack (Swift)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A timestamp you use to access all events in a music track through a beat range.

## Declaration

```swift
var AVMusicTimeStampEndOfTrack: Double { get }
```

<a id="Discussion"></a>

## Discussion

Pass this value as the length of an [AVBeatRange](avbeatrange-c.struct.md) to indicate an end time beyond the last event in the track. This makes it possible to specify a beat range that includes all events starting at a particular time, up to and including the last event.

## See Also

### Handling Beat Range

- [beats(forHostTime:error:)](avaudiosequencer/beats%28forhosttime_error_%29.md): Gets the beat the system plays at the specified host time.
- [beats(forSeconds:)](avaudiosequencer/beats%28forseconds_%29.md): Gets the beat position (timestamp) for the specified time in the track.
- [AVBeatRange](avbeatrange-swift.typealias.md)

# AVMusicTimeStampEndOfTrack (Objective-C)

**Framework:** AVFAudio  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A timestamp you use to access all events in a music track through a beat range.

## Declaration

```objectivec
#define AVMusicTimeStampEndOfTrack
```

<a id="Discussion"></a>

## Discussion

Pass this value as the length of an [AVBeatRange](avbeatrange-c.struct.md) to indicate an end time beyond the last event in the track. This makes it possible to specify a beat range that includes all events starting at a particular time, up to and including the last event.

## See Also

### Handling Beat Range

- [beatsForHostTime:error:](avaudiosequencer/beats%28forhosttime_error_%29.md): Gets the beat the system plays at the specified host time.
- [beatsForSeconds:](avaudiosequencer/beats%28forseconds_%29.md): Gets the beat position (timestamp) for the specified time in the track.
- [AVBeatRange](avbeatrange-c.struct.md): A specific time range within a music track.
