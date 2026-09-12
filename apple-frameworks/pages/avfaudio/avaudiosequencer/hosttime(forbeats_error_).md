> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/hosttime(forbeats:error:)](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/hosttime(forbeats:error:))

# hostTime(forBeats:error:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets the host time the sequence plays at the specified position.

## Declaration

```swift
func hostTime(forBeats inBeats: AVMusicTimeStamp, error outError: NSErrorPointer) -> UInt64
```

## Parameters

- `inBeats`: The timestamp for the beat position.
- `outError`: On exit, if an error occurs, a description of the error.

<a id="Discussion"></a>

## Discussion

This call is valid when the player is in a playing state. It returns `0` with an error, otherwise, or if the starting position of the player is after the specified beat. The method uses the sequence’s tempo map to translate a beat time from the starting time and the beat of the player.

## See Also

### Managing Time Stamps

- [AVMusicTimeStamp](../avmusictimestamp.md): A fractional number of beats.
- [seconds(forBeats:)](seconds%28forbeats_%29.md): Gets the time for the specified beat position (timestamp) in the track, in seconds.

# hostTimeForBeats:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets the host time the sequence plays at the specified position.

## Declaration

```objectivec
- (UInt64) hostTimeForBeats:(AVMusicTimeStamp) inBeats error:(NSError **) outError;
```

## Parameters

- `inBeats`: The timestamp for the beat position.
- `outError`: On exit, if an error occurs, a description of the error.

<a id="Discussion"></a>

## Discussion

This call is valid when the player is in a playing state. It returns `0` with an error, otherwise, or if the starting position of the player is after the specified beat. The method uses the sequence’s tempo map to translate a beat time from the starting time and the beat of the player.

## See Also

### Managing Time Stamps

- [AVMusicTimeStamp](../avmusictimestamp.md): A fractional number of beats.
- [secondsForBeats:](seconds%28forbeats_%29.md): Gets the time for the specified beat position (timestamp) in the track, in seconds.
