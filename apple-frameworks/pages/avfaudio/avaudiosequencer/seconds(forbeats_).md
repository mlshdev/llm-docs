> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/seconds(forbeats:)](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/seconds(forbeats:))

# seconds(forBeats:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets the time for the specified beat position (timestamp) in the track, in seconds.

## Declaration

```swift
func seconds(forBeats beats: AVMusicTimeStamp) -> TimeInterval
```

## Parameters

- `beats`: The timestamp for the beat position.

## See Also

### Managing Time Stamps

- [AVMusicTimeStamp](../avmusictimestamp.md): A fractional number of beats.
- [hostTime(forBeats:error:)](hosttime%28forbeats_error_%29.md): Gets the host time the sequence plays at the specified position.

# secondsForBeats: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets the time for the specified beat position (timestamp) in the track, in seconds.

## Declaration

```objectivec
- (NSTimeInterval) secondsForBeats:(AVMusicTimeStamp) beats;
```

## Parameters

- `beats`: The timestamp for the beat position.

## See Also

### Managing Time Stamps

- [AVMusicTimeStamp](../avmusictimestamp.md): A fractional number of beats.
- [hostTimeForBeats:error:](hosttime%28forbeats_error_%29.md): Gets the host time the sequence plays at the specified position.
