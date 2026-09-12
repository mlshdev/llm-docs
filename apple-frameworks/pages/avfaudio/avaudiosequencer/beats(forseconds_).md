> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/beats(forseconds:)](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/beats(forseconds:))

# beats(forSeconds:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets the beat position (timestamp) for the specified time in the track.

## Declaration

```swift
func beats(forSeconds seconds: TimeInterval) -> AVMusicTimeStamp
```

## Parameters

- `seconds`: The time to retrieve the beat timestamp for.

## See Also

### Handling Beat Range

- [beats(forHostTime:error:)](beats%28forhosttime_error_%29.md): Gets the beat the system plays at the specified host time.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
- [AVBeatRange](../avbeatrange-swift.typealias.md)

# beatsForSeconds: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets the beat position (timestamp) for the specified time in the track.

## Declaration

```objectivec
- (AVMusicTimeStamp) beatsForSeconds:(NSTimeInterval) seconds;
```

## Parameters

- `seconds`: The time to retrieve the beat timestamp for.

## See Also

### Handling Beat Range

- [beatsForHostTime:error:](beats%28forhosttime_error_%29.md): Gets the beat the system plays at the specified host time.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
- [AVBeatRange](../avbeatrange-c.struct.md): A specific time range within a music track.
