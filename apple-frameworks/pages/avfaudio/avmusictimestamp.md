> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictimestamp](https://developer.apple.com/documentation/avfaudio/avmusictimestamp)

# AVMusicTimeStamp (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A fractional number of beats.

## Declaration

```swift
typealias AVMusicTimeStamp = Double
```

<a id="Discussion"></a>

## Discussion

Use this value for all sequencer timeline-related methods. The tempo of the sequence determines the relationship between this value and time (in seconds).

## See Also

### Managing Time Stamps

- [hostTime(forBeats:error:)](avaudiosequencer/hosttime%28forbeats_error_%29.md): Gets the host time the sequence plays at the specified position.
- [seconds(forBeats:)](avaudiosequencer/seconds%28forbeats_%29.md): Gets the time for the specified beat position (timestamp) in the track, in seconds.

# AVMusicTimeStamp (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A fractional number of beats.

## Declaration

```objectivec
typedef double AVMusicTimeStamp;
```

<a id="Discussion"></a>

## Discussion

Use this value for all sequencer timeline-related methods. The tempo of the sequence determines the relationship between this value and time (in seconds).

## See Also

### Managing Time Stamps

- [hostTimeForBeats:error:](avaudiosequencer/hosttime%28forbeats_error_%29.md): Gets the host time the sequence plays at the specified position.
- [secondsForBeats:](avaudiosequencer/seconds%28forbeats_%29.md): Gets the time for the specified beat position (timestamp) in the track, in seconds.
