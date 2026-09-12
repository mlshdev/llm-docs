> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/beats(forhosttime:error:)](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/beats(forhosttime:error:))

# beats(forHostTime:error:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets the beat the system plays at the specified host time.

## Declaration

```swift
func beats(forHostTime inHostTime: UInt64, error outError: NSErrorPointer) -> AVMusicTimeStamp
```

## Parameters

- `inHostTime`: The host time for the beat position.
- `outError`: On exit, if an error occurs, a description of the error.

<a id="Discussion"></a>

## Discussion

This call is valid when the player is in a playing state. It returns `0` with an error, otherwise, or if the starting position of the player is after the specified host time. This method uses the sequence’s tempo map to retrieve a beat time from the specified host time.

## See Also

### Handling Beat Range

- [beats(forSeconds:)](beats%28forseconds_%29.md): Gets the beat position (timestamp) for the specified time in the track.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
- [AVBeatRange](../avbeatrange-swift.typealias.md)

# beatsForHostTime:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets the beat the system plays at the specified host time.

## Declaration

```objectivec
- (AVMusicTimeStamp) beatsForHostTime:(UInt64) inHostTime error:(NSError **) outError;
```

## Parameters

- `inHostTime`: The host time for the beat position.
- `outError`: On exit, if an error occurs, a description of the error.

<a id="Discussion"></a>

## Discussion

This call is valid when the player is in a playing state. It returns `0` with an error, otherwise, or if the starting position of the player is after the specified host time. This method uses the sequence’s tempo map to retrieve a beat time from the specified host time.

## See Also

### Handling Beat Range

- [beatsForSeconds:](beats%28forseconds_%29.md): Gets the beat position (timestamp) for the specified time in the track.
- [AVMusicTimeStampEndOfTrack](../avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.
- [AVBeatRange](../avbeatrange-c.struct.md): A specific time range within a music track.
