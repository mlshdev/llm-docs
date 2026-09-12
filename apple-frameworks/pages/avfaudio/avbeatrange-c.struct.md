> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avbeatrange-c.struct](https://developer.apple.com/documentation/avfaudio/avbeatrange-c.struct)

# AVBeatRange

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A specific time range within a music track.

## Declaration

```objectivec
typedef struct _AVBeatRange { ... } AVBeatRange;
```

## Topics

### Creating a beat range

- [AVMakeBeatRange](avmakebeatrange%28____%29.md): Creates a beat range with the specified start time and length.

### Inspecting a range

- [length](avbeatrange-c.struct/length.md)
- [start](avbeatrange-c.struct/start.md)

## See Also

### Handling Beat Range

- [beatsForHostTime:error:](avaudiosequencer/beats%28forhosttime_error_%29.md): Gets the beat the system plays at the specified host time.
- [beatsForSeconds:](avaudiosequencer/beats%28forseconds_%29.md): Gets the beat position (timestamp) for the specified time in the track.
- [AVMusicTimeStampEndOfTrack](avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
